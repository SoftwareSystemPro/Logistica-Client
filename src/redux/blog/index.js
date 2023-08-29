import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const BlogGet = createAsyncThunk("Blog/get", async () => {
  return await axios.get(`${API_URL}/blog`).then((response) => response.data);
});

const BlogSlice = createSlice({
  name: "admin",
  initialState: {
    BlogGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
  },
  extraReducers: {
    // get
    [BlogGet.pending]: (state, action) => {
      state.BlogGet.loading = true;
    },
    [BlogGet.fulfilled]: (state, action) => {
      state.BlogGet.loading = false;
      state.BlogGet.success = true;
      state.BlogGet.data = action.payload;
      state.BlogGet.error = false;
    },
    [BlogGet.rejected]: (state, action) => {
      state.BlogGet.loading = false;
      state.BlogGet.error = true;
      state.BlogGet.success = false;
    },
  },
});

export const {} = BlogSlice.actions;
export default BlogSlice.reducer;
