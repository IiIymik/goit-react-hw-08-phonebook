import { createSlice } from '@reduxjs/toolkit';
import {
    register,
    login,
    logOut,
    fetchCurrentUser,
} from 'redux/auth/auth-operations.js';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, { payload }) {
            console.log(payload);
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [login.fulfilled](state, { payload }) {
            state.user = payload.data.user;
            state.token = payload.data.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state, _) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        },
        [fetchCurrentUser.rejected](state) {
            state.isFetchingCurrentUser = false;
        },
        [fetchCurrentUser.pending](state) {
            state.isFetchingCurrentUser = true;
        },
    },
});

export default authSlice.reducer;
