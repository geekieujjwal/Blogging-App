import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverLink } from "../../utils/const";

const fetchAllBlogs = createAsyncThunk("blog/fetchAll", async () => {
  try {
    const response = await fetch(`${serverLink}/api/v1/blog`);
    const data = await response.json();
    if (response.ok) {
      console.log(data);
      return data;
    } else {
      throw data;
    }
  } catch (error) {
    console.log("Error fetching blogs", error.message);
  }
});

export { fetchAllBlogs };
