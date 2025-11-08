import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
      const res = await axios.post("/auth/sign-up", data);
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
      const res = await axios.post("/auth/login", data);
      return res.data.Data?.user || res.data.user;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Login failed");
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/auth/me");
      return res.data.Data?.user || res.data.user;
    } catch (err: any) {
      return rejectWithValue(null);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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

      .addCase(fetchCurrentUser.fulfilled, (s, a) => {
        if (a.payload) {
          s.isAuthenticated = true;
          s.user = a.payload;
        }
      })
      .addCase(fetchCurrentUser.rejected, (s) => {
        s.isAuthenticated = false;
        s.user = null;
      });
  },
});

export const { logoutState } = authSlice.actions;
export default authSlice.reducer;
