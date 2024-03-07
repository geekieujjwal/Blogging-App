import { createSlice } from "@reduxjs/toolkit";
import { fetchAllBlogs } from "../thunks/fetchAllBlogs";

const blogSlice = createSlice({
  name: "blog",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
      //   console.log(action.payload);
      return action.payload;
    });
  },
});

export const blogReducer = blogSlice.reducer;
