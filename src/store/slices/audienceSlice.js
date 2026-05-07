import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../../config';

export const fetchUsers = createAsyncThunk('audience/fetchUsers', async () => {
    const response = await fetch(`${API_URL}/api/users`);
    return await response.json();
});

export const addUser = createAsyncThunk('audience/addUser', async (userData) => {
    const response = await fetch(`${API_URL}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    return await response.json();
});

export const updateUser = createAsyncThunk('audience/updateUser', async (userData) => {
    const { id, ...data } = userData;
    const response = await fetch(`${API_URL}/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return await response.json();
});

export const deleteUser = createAsyncThunk('audience/deleteUser', async (id) => {
    await fetch(`${API_URL}/api/users/${id}`, { method: 'DELETE' });
    return id;
});

const audienceSlice = createSlice({
    name: 'audience',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => { state.loading = true; })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.unshift(action.payload);
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.users.findIndex(u => u.id === action.payload.id);
                if (index !== -1) state.users[index] = action.payload;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(u => u.id !== action.payload);
            });
    },
});

export default audienceSlice.reducer;
