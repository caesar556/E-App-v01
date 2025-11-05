import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosApi";

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  loading: boolean;
  error: any;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export const register = createAsyncThunk(
  "auth/register",
  async (data: RegisterPayload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("api/auth/sign-up", data);
      return res.data.Data?.user || res.data.user;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (data: LoginPayload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("api/auth/login", data);
      return res.data.Data?.user || res.data.user;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Login failed");
    }
  },
);

export const refreshToken = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("api/auth/refresh-token");
      console.log("res data", res.data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Refresh failed");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<null>) {
      state.isAuthenticated = !!action.payload;
      state.user = action.payload;
      state.loading = false;
    },
    logoutState(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(register.fulfilled, (s, a) => {
        s.loading = false;
        s.isAuthenticated = true;
        s.user = a.payload;
      })
      .addCase(register.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })

      .addCase(login.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(login.fulfilled, (s, a) => {
        s.loading = false;
        s.isAuthenticated = true;
        s.user = a.payload;
      })
      .addCase(login.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })

      .addCase(refreshToken.fulfilled, (s, a) => {
        s.isAuthenticated = true;
        s.user = a.payload;
      })
      .addCase(refreshToken.rejected, (s, a) => {
        s.isAuthenticated = false;
        s.user = null;
        s.error = a.payload;
      });
  },
});

export const { logoutState, setUser } = authSlice.actions;

export default authSlice.reducer;
