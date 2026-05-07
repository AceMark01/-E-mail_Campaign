import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

// --- CORS & MIDDLEWARE ---
app.use(cors());
app.use(express.json({ limit: '50mb' }));

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL?.trim();

if (!GOOGLE_SCRIPT_URL) {
    console.warn("⚠️ WARNING: GOOGLE_SCRIPT_URL is not defined in .env file!");
}

// Helper function to interact with Google Sheets App Script
async function googleScriptRequest(action, data = null, id = null) {
    try {
        if (action.startsWith('get')) {
            const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=${action}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } else {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action, data, id }),
                redirect: 'follow'
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        }
    } catch (error) {
        console.error(`Google Script API Error (${action}):`, error);
        return null;
    }
}

// --- GOOGLE APPS SCRIPT MAIL BRIDGE ---
// This bypasses Render's SMTP Port Block by sending mail over standard HTTP (Port 443)
const sendEmail = async (to, subject, html) => {
    console.log(`� Bridging Email via Google Apps Script: ${to}`);
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'sendEmail',
                data: { 
                    to, 
                    subject, 
                    html,
                    from: process.env.EMAIL_USER 
                }
            }),
            redirect: 'follow'
        });

        if (!response.ok) throw new Error(`HTTP Bridge Status: ${response.status}`);

        const result = await response.json();
        if (!result || !result.success) {
            throw new Error(result?.error || "Unknown bridge error");
        }

        console.log(`✅ BRIDGE SUCCESS: ${to}`);
        return result;
    } catch (error) {
        console.error(`❌ MAIL BRIDGE FAILED [${to}]:`, error.message);
        throw error;
    }
};

// --- ROUTES ---

// 0. Health Check
app.get('/', (req, res) => {
    res.status(200).send('🚀 Mail Promotion Backend: Active and Ready! (Google Sheets Mode)');
});

// 1. Get Analytics
app.get('/api/analytics', async (req, res) => {
    const DAILY_LIMIT = 500;
    const today = new Date().toISOString().split('T')[0];

    // Fetch campaigns from Google Sheet
    let campaigns = await googleScriptRequest('getCampaigns');
    if (!Array.isArray(campaigns)) campaigns = [];

    const sent = campaigns.length;
    const opened = campaigns.filter(c => c.opened).length;

    // Filter campaigns sent today
    const sentToday = campaigns.filter(c => {
        if (!c.sentAt) return false;
        const campaignDate = new Date(c.sentAt).toISOString().split('T')[0];
        return campaignDate === today;
    }).length;

    const limitInfo = {
        dailyLimit: DAILY_LIMIT,
        usedToday: sentToday,
        remaining: Math.max(0, DAILY_LIMIT - sentToday)
    };

    campaigns.sort((a, b) => new Date(b.sentAt) - new Date(a.sentAt));
    res.json({ sent, opened, campaigns, limitInfo });
});

// 1.2 Get Users
app.get('/api/users', async (req, res) => {
    let users = await googleScriptRequest('getUsers');
    if (!Array.isArray(users)) users = [];
    res.json(users);
});

// 1.3 Add User
app.post('/api/users', async (req, res) => {
    const newUser = {
        id: Date.now().toString(),
        ...req.body,
        status: req.body.status || "Active"
    };

    const response = await googleScriptRequest('addUser', newUser);
    if (response && response.success) {
        res.status(201).json(newUser);
    } else {
        res.status(500).json({ error: "Failed to add user to Google Sheets" });
    }
});

// 1.4 Update User
app.put('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const response = await googleScriptRequest('updateUser', req.body, id);

    if (response && response.success) {
        res.json({ id, ...req.body }); // Optimistic return
    } else {
        res.status(404).json({ error: "User not found or update failed" });
    }
});

// 1.5 Delete User
app.delete('/api/users/:id', async (req, res) => {
    const response = await googleScriptRequest('deleteUser', null, req.params.id);

    if (response && response.success) {
        res.json({ success: true });
    } else {
        res.status(500).json({ error: "Failed to delete user from Google Sheets" });
    }
});

// 1.6 DEBUG ENDPOINT
app.get('/api/debug', async (req, res) => {
    const campaigns = await googleScriptRequest('getCampaigns') || [];
    res.json({
        uptime: process.uptime(),
        envLoaded: !!process.env.EMAIL_USER,
        totalCampaignsInSheet: campaigns.length,
        last5Campaigns: campaigns.slice(-5)
    });
});

// 2. Launch Campaign (ASYNC)
app.post('/api/launch-campaign', async (req, res) => {
    console.log("📨 Campaign Request Received");
    const { users, subject, message } = req.body;

    if (!users || users.length === 0) {
        return res.status(400).json({ status: "error", error: "Recipient list is empty." });
    }

    // Processor (Synchronous now to keep spinner alive)
    let processedAt = new Date().toISOString();
    let records = [];
    let successCount = 0;
    let failCount = 0;

    for (const user of users) {
        try {
            await sendEmail(user.email, subject, message);
            console.log(`✅ DISPATCHED: ${user.email}`);

            records.push({
                id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
                email: user.email,
                subject,
                sentAt: processedAt,
                opened: false
            });
            successCount++;

            // Small throttle to avoid hitting Gmail rate limits too fast
            await new Promise(r => setTimeout(r, 300));
        } catch (err) {
            console.error(`❌ FAILED: ${user.email} | ${err.message}`);
            failCount++;
        }
    }

    // Save to Google Sheet using Apps Script Web App
    if (records.length > 0) {
        console.log(`💾 Saving ${records.length} campaign records to Google Sheet...`);
        await googleScriptRequest('addCampaigns', records);
        console.log(`✅ Saved ${records.length} records to Google Sheet.`);
    }

    res.status(200).json({
        status: "success",
        message: `Campaign completed. Sent: ${successCount}, Failed: ${failCount}`,
        count: successCount
    });
});

// Handling crashes
process.on('uncaughtException', (err) => console.error('CRASH PREVENTED: ', err));
process.on('unhandledRejection', (reason) => console.error('PROMISE REJECTION PREVENTED: ', reason));

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 BACKEND LIVE ON PORT ${PORT}`);
    console.log(`📡 MAIL ENGINE: Google HTTP Bridge (Port 443)`);
});
