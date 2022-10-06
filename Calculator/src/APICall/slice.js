import { createSlice } from "@reduxjs/toolkit";

const apiCallSlice = createSlice({
  name: "ApiCall",
  initialState: { isLoading: false, result: [] },
  reducers: {
    request: (state, actions) => {
      state.isLoading = true;
    },
    success: (state, actions) => {
      state.result = actions.payload.result;
      state.isLoading = false;
    },
    fail: (state, actions) => {
      state.isLoading = false;
    },
  },
});
export const { request, success, fail } = apiCallSlice.actions;

export default apiCallSlice.reducer;
