import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const fetchContacts = createAsyncThunk(
  "contacts/get",
  async (_, thunkApi) => {
    try {
      const res = await instance.get("/contacts");
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/add",
  async (formData, thunkApi) => {
    try {
      const res = await instance.post("/contacts", formData);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/delete",
  async (contactId, thunkApi) => {
    try {
      const res = await instance.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
