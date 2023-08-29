import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const VehicleAdd = createAsyncThunk("Vehicle/post", async (body) => {
  return await axios
    .post(`${API_URL}/vehicle`, body, {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyODgxMjcwfQ.T7G4wrfNeHh2_HfGgNgYb1wyYG0Dsb2cgVAlxw6sW_k",
      },
    })
    .then((res) => res);
});
export const VehicleGet = createAsyncThunk("Vehicle/get", async () => {
  return await axios
    .get(`${API_URL}/vehicle`)
    .then((response) => response.data);
});

const VehicleSlice = createSlice({
  name: "admin",
  initialState: {
    VehicleGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    VehiclePost: {
      Success: false,
      Error: false,
      loading: false,
    },
  },
  extraReducers: {
    // get
    [VehicleGet.pending]: (state, action) => {
      state.VehicleGet.loading = true;
    },
    [VehicleGet.fulfilled]: (state, action) => {
      state.VehicleGet.loading = false;
      state.VehicleGet.success = true;
      state.VehicleGet.data = action.payload;
      state.VehicleGet.error = false;
    },
    [VehicleGet.rejected]: (state, action) => {
      state.VehicleGet.loading = false;
      state.VehicleGet.error = true;
      state.VehicleGet.success = false;
    },
    // add
    [VehicleAdd.pending]: (state, action) => {
      state.VehiclePost.loading = true;
    },
    [VehicleAdd.fulfilled]: (state, action) => {
      state.VehiclePost.loading = false;
      state.VehiclePost.Success = true;
      state.VehiclePost.Error = false;
    },
    [VehicleAdd.rejected]: (state, action) => {
      state.VehiclePost.loading = false;
      state.VehiclePost.Error = true;
      state.VehiclePost.Success = false;
    },
  },
});

export const {} = VehicleSlice.actions;
export default VehicleSlice.reducer;
