import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearToken = () => {
    instance.defaults.headers.common.Authorization = ""
}

export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
        const {data} = await instance.post("/users/signup", formData);
        setToken(data.token)

        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
        const {data} = await instance.post("/users/login", formData);
        setToken(data.token)

        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    setToken(token);
    try {
      const {data} = await instance.get("/users/current");

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
  {condition: (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const token = state.auth.token

    if(!token) return false
    return true
  }}
);

export const logOutUser = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
    try {
        const {data} = await instance.post("/users/logout")
        clearToken()
    
        return data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})