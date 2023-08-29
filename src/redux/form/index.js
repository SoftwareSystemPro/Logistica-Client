import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const FormAdd = createAsyncThunk("Form/post", async (body) => {
  return await axios
    .post(`${API_URL}/form`, body, {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyODgxMjcwfQ.T7G4wrfNeHh2_HfGgNgYb1wyYG0Dsb2cgVAlxw6sW_k",
      },
    })
    .then((res) => window.localStorage.setItem("ForVeh", res?.data?.data?.id));
});
export const FormGet = createAsyncThunk("Form/get", async () => {
  return await axios.get(`${API_URL}/form`).then((response) => response.data);
});

const FormSlice = createSlice({
  name: "admin",
  initialState: {
    FormGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    FormPost: {
      Success: false,
      Error: false,
      loading: false,
    },
  },
  extraReducers: {
    // get
    [FormGet.pending]: (state, action) => {
      state.FormGet.loading = true;
    },
    [FormGet.fulfilled]: (state, action) => {
      state.FormGet.loading = false;
      state.FormGet.success = true;
      state.FormGet.data = action.payload;
      state.FormGet.error = false;
    },
    [FormGet.rejected]: (state, action) => {
      state.FormGet.loading = false;
      state.FormGet.error = true;
      state.FormGet.success = false;
    },
    // add
    [FormAdd.pending]: (state, action) => {
      state.FormPost.loading = true;
    },
    [FormAdd.fulfilled]: (state, action) => {
      state.FormPost.loading = false;
      state.FormPost.Success = true;
      state.FormPost.Error = false;
    },
    [FormAdd.rejected]: (state, action) => {
      state.FormPost.loading = false;
      state.FormPost.Error = true;
      state.FormPost.Success = false;
    },
  },
});

export const {} = FormSlice.actions;
export default FormSlice.reducer;
