import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { logOutUser, loginUser, refreshUser, registerUser } from "./operations";

const INIT_STATE = {
    userData: null,
    token: null,
    isSignedIn: false,
    isRefreshing: false,
    isLoading: false,
    isError: false
}

const authSlice = createSlice({
  name: "auth",
  initialState: INIT_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isError = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.userData = action.payload;
        state.isSignedIn = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isError = true;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.token = null;
        state.isLoading = false;
        state.isSignedIn = false;
      })

      .addMatcher(
        isAnyOf(
          registerUser.pending, 
          loginUser.pending, 
          logOutUser.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          registerUser.rejected, 
          loginUser.rejected, 
          logOutUser.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      ),
});

export const authReducer = authSlice.reducer