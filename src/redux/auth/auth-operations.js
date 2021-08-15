import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// token
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Register new user
export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    console.log(data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
// Login user
export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    console.log('🚀 ~ file: auth-operations.jsx ~ line 19 ~ data', data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
// logout user
export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});
// Refresh user
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    console.log(
      '🚀 ~ file: auth-operations.js ~ line 49 ~ fetchCurrentUser ~ state',
      state,
    );
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.post('users/current');
      return data;
    } catch (error) {
      console.log(
        '🚀 ~ file: auth-operations.js ~ line 57 ~ fetchCurrentUser ~ error',
        error,
      );
    }
  },
);
