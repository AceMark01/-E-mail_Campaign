import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../../config';

export const fetchAnalytics = createAsyncThunk('analytics/fetchAnalytics', async () => {
    const response = await fetch(`${API_URL}/api/analytics`);
    return await response.json();
});

export const syncStats = createAsyncThunk('analytics/syncStats', async () => {
    const response = await fetch(`${API_URL}/api/sync-stats`);
    return await response.json();
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
