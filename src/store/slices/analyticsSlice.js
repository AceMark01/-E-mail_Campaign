import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { googleScriptRequest } from '../../services/googleService';

export const fetchAnalytics = createAsyncThunk('analytics/fetchAnalytics', async () => {
    const DAILY_LIMIT = 500;
    const today = new Date().toISOString().split('T')[0];

    let campaigns = await googleScriptRequest('getCampaigns');
    if (!Array.isArray(campaigns)) campaigns = [];

    const sent = campaigns.length;
    const opened = campaigns.filter(c => c.opened).length;

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
    return { sent, opened, campaigns, limitInfo };
});

export const syncStats = createAsyncThunk('analytics/syncStats', async () => {
    return await fetchAnalytics(); // Just refetch for sync
});

const analyticsSlice = createSlice({
    name: 'analytics',
    initialState: {
        stats: { sent: 0, opened: 0, campaigns: [], limitInfo: {} },
        loading: false,
        syncing: false,
        lastRefreshed: new Date().toISOString(),
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnalytics.pending, (state) => { state.loading = true; })
            .addCase(fetchAnalytics.fulfilled, (state, action) => {
                state.loading = false;
                state.stats = action.payload;
                state.lastRefreshed = new Date().toISOString();
            })
            .addCase(syncStats.pending, (state) => { state.syncing = true; })
            .addCase(syncStats.fulfilled, (state) => {
                state.syncing = false;
            });
    },
});

export default analyticsSlice.reducer;
