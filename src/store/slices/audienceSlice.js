import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { googleScriptRequest } from '../../services/googleService';

export const fetchUsers = createAsyncThunk('audience/fetchUsers', async () => {
    let users = await googleScriptRequest('getUsers');
    return Array.isArray(users) ? users : [];
});

export const addUser = createAsyncThunk('audience/addUser', async (userData) => {
    const newUser = {
        id: Date.now().toString(),
        ...userData,
        status: userData.status || "Active"
    };
    await googleScriptRequest('addUser', newUser);
    return newUser;
});

export const updateUser = createAsyncThunk('audience/updateUser', async (userData) => {
    const { id, ...data } = userData;
    await googleScriptRequest('updateUser', data, id);
    return userData;
});

export const deleteUser = createAsyncThunk('audience/deleteUser', async (id) => {
    await googleScriptRequest('deleteUser', null, id);
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
