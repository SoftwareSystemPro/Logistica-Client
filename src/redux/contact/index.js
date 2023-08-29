import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const ContactAdd = createAsyncThunk("Contact/post", async (body) => {
  return await axios
    .post(`${API_URL}/contact`, body, {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyODgxMjcwfQ.T7G4wrfNeHh2_HfGgNgYb1wyYG0Dsb2cgVAlxw6sW_k",
      },
    })
    .then((res) => window.localStorage.setItem("ForVeh", res?.data?.data?.id));
});
export const ContactGet = createAsyncThunk("Contact/get", async () => {
  return await axios.get(`${API_URL}/contact`).then((response) => response.data);
});

const ContactSlice = createSlice({
  name: "admin",
  initialState: {
    ContactGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    ContactPost: {
      Success: false,
      Error: false,
      loading: false,
    },
  },
  extraReducers: {
    // get
    [ContactGet.pending]: (state, action) => {
      state.ContactGet.loading = true;
    },
    [ContactGet.fulfilled]: (state, action) => {
      state.ContactGet.loading = false;
      state.ContactGet.success = true;
      state.ContactGet.data = action.payload;
      state.ContactGet.error = false;
    },
    [ContactGet.rejected]: (state, action) => {
      state.ContactGet.loading = false;
      state.ContactGet.error = true;
      state.ContactGet.success = false;
    },
    // add
    [ContactAdd.pending]: (state, action) => {
      state.ContactPost.loading = true;
    },
    [ContactAdd.fulfilled]: (state, action) => {
      state.ContactPost.loading = false;
      state.ContactPost.Success = true;
      state.ContactPost.Error = false;
    },
    [ContactAdd.rejected]: (state, action) => {
      state.ContactPost.loading = false;
      state.ContactPost.Error = true;
      state.ContactPost.Success = false;
    },
  },
});

export const {} = ContactSlice.actions;
export default ContactSlice.reducer;
