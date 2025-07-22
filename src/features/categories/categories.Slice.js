import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${API_BASE_URL}/categories`);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.list = action.payload;
    },
    addCategory: (state, action) => {
      state.list.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.list = state.list.filter(
        (category) => category.id !== action.payload.id
      );
    },
  },
});
