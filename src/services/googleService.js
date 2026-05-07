const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycby8AeU5XpzndZ8VuQm17wWPk4NMrtLUJoNJvDljBkYw1YRGc6RobFwVukQSsXtecg68hQ/exec";

export const googleScriptRequest = async (action, data = null, id = null) => {
    try {
        if (action.startsWith('get')) {
            const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=${action}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } else {
            // Using text/plain to avoid CORS preflight OPTIONS request
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify({ action, data, id })
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        }
    } catch (error) {
        console.error(`Google Script API Error (${action}):`, error);
        throw error;
    }
};

export const sendEmailDirect = async (to, subject, html, from) => {
    return await googleScriptRequest('sendEmail', { to, subject, html, from });
};
