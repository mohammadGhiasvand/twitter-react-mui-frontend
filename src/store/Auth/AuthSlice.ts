import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../config/api";

interface storeTypes {
  user: {
    fullName: string;
  } | null;
  loading: boolean;
  error: string | null | unknown | { message: string };
  jwt: string | null;
}

const initialState: storeTypes = {
  user: null,
  loading: false,
  error: null,
  jwt: null,
};

const loginUserHandler = createAsyncThunk("auth/login", async (loginData) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);

    console.log("Loggedin user", data);

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }

    return data.jwt;
  } catch (error) {
    console.log(
      "The following error occurred during user login action: " + error
    );

    return error?.message;
  }
});

const registerUserHandler = createAsyncThunk(
  "auth/register",
  async (registerData) => {
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/auth/signup`,
        registerData
      );

      console.log("Signed up user", data);

      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
      }

      return data.jwt;
    } catch (error) {
      console.log(
        "The following error occurred during user login action: " + error
      );

      return error?.message;
    }
  }
);

const getUserProfileHandler = createAsyncThunk(
  "auth/getProfile",
  async (jwtToke) => {
    try {
      const { data } = await await axios.get(
        `${API_BASE_URL}/api/users/profile`,
        {
          headers: {
            Authorization: `Bearer ${jwtToke}`,
          },
        }
      );

      return data;
    } catch (error) {
      console.log(
        "The following error occurred during user login action: " + error
      );

      return error?.message;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutHandler: (state) => {
      localStorage.removeItem("jwt");
      state.jwt = null;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserHandler.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserHandler.fulfilled, (state, action) => {
        state.jwt = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(loginUserHandler.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });

    builder
      .addCase(registerUserHandler.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUserHandler.fulfilled, (state, action) => {
        state.jwt = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(registerUserHandler.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getUserProfileHandler.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProfileHandler.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(getUserProfileHandler.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logoutHandler } = authSlice.actions;
