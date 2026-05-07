import { configureStore } from '@reduxjs/toolkit';
import audienceReducer from './slices/audienceSlice';
import analyticsReducer from './slices/analyticsSlice';

export const store = configureStore({
    reducer: {
        audience: audienceReducer,
        analytics: analyticsReducer,
    },
});
