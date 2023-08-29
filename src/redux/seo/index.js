import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const SeoGet = createAsyncThunk("Seo/get", async () => {
  return await axios.get(`${API_URL}/seo`).then((response) => response.data);
});

const SeoSlice = createSlice({
  name: "admin",
  initialState: {
    SeoGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
  },
  extraReducers: {
    // get
    [SeoGet.pending]: (state, action) => {
      state.SeoGet.loading = true;
    },
    [SeoGet.fulfilled]: (state, action) => {
      state.SeoGet.loading = false;
      state.SeoGet.success = true;
      state.SeoGet.data = action.payload;
      state.SeoGet.error = false;
    },
    [SeoGet.rejected]: (state, action) => {
      state.SeoGet.loading = false;
      state.SeoGet.error = true;
      state.SeoGet.success = false;
    },
  },
});

export const {} = SeoSlice.actions;
export default SeoSlice.reducer;
