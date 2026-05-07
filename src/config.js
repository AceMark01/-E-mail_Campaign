const rawUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
// Automatically remove trailing slash to prevent double-slashes like "//api/analytics"
const API_URL = rawUrl.replace(/\/$/, '');

console.log("📍 API_URL Detected:", API_URL);

export default API_URL;
