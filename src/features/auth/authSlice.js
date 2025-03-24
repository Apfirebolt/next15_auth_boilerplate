import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
import Cookies from 'js-cookie'
import { set } from 'mongoose'

// Get user from cookie
const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null

const initialState = {
    user: user ? user : null,
    profile: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Register new user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()

    return thunkAPI.rejectWithValue(message)
  }
})

// Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  authService.logout()
})

// Get User Profile
export const getUserProfile = createAsyncThunk(
  "auth/profile",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.access_token;
      return await authService.getUserProfile(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    },
    resetSuccess: (state) => {
      state.isSuccess = false
    },
    resetError: (state) => {
      state.isError = false
    },
    resetMessage: (state) => {
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = 'User registered successfully, please login'
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
        state.message = 'User logged in successfully'
        console.log('Promise fulfilled')
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.profile = action.payload
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.profile = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.profile = null
        state.isSuccess = true
        state.message = 'User logged out successfully'
      })
  },
})

export const { reset, resetError, resetSuccess, resetMessage } = authSlice.actions
export default authSlice.reducer