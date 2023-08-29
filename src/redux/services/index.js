import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const ServicesGet = createAsyncThunk("Services/get", async () => {
  return await axios
    .get(`${API_URL}/services`)
    .then((response) => response.data);
});

const ServicesSlice = createSlice({
  name: "admin",
  initialState: {
    ServicesGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
  },
  extraReducers: {
    // get
    [ServicesGet.pending]: (state, action) => {
      state.ServicesGet.loading = true;
    },
    [ServicesGet.fulfilled]: (state, action) => {
      state.ServicesGet.loading = false;
      state.ServicesGet.success = true;
      state.ServicesGet.data = action.payload;
      state.ServicesGet.error = false;
    },
    [ServicesGet.rejected]: (state, action) => {
      state.ServicesGet.loading = false;
      state.ServicesGet.error = true;
      state.ServicesGet.success = false;
    },
  },
});

export const {} = ServicesSlice.actions;
export default ServicesSlice.reducer;
