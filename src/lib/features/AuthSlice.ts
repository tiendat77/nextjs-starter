import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '@/constants/storage.constant';
import { TokenHelper } from '@/utils/token.helper';
import { AuthModel, UserModel } from '@/models';

export const authInit = createAsyncThunk('auth/init', async () => {
  const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  const userInfo = TokenHelper.decode(accessToken);

  if (userInfo) {
    return Promise.resolve(userInfo as UserModel);
  }
  return Promise.resolve(null);
});

export const authSignIn = createAsyncThunk(
  'auth/signIn',
  async ({ accessToken, refreshToken }: AuthModel) => {
    const userInfo = TokenHelper.decode(accessToken);

    if (userInfo) {
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
      return Promise.resolve(userInfo as UserModel);
    }

    return Promise.reject();
  }
);

export const authSignOut = createAsyncThunk('auth/signOut', async () => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  return Promise.resolve();
});

const initialState = {
  user: null as UserModel,
  isSignIn: false,
  isAuthenticated: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authInit.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload;
        state.isAuthenticated = true;
      }
      // return state;
    });

    builder.addCase(authSignIn.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload;
        state.isAuthenticated = true;
      }

      return state;
    });

    builder.addCase(authSignOut.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.user = null;
      return state;
    });
  },
});

export default AuthSlice.reducer;
