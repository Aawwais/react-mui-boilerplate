import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      const response = "";
      if (response) {
        return response;
      } else {
        toast.error(response.message);
        return thunkAPI.rejectWithValue(response);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const singupUser = createAsyncThunk(
  "user/register",
  async (data, thunkAPI) => {
    try {
      const response = "";
      if (response) {
        return response.data;
      } else {
        toast.error(response.message);
        return thunkAPI.rejectWithValue(response);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
