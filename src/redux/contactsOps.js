import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66a61b1423b29e17a1a1bef9.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get("/contacts");
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contact/addContact",
  async (newContact, thunkAPI) => {
    try {
      const responce = await axios.post("/contacts", newContact);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const responce = await axios.delete(`/contacts/${contactId}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
