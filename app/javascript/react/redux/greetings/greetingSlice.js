import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGreetings = createAsyncThunk("greetings/fetch", async () => {
  const response = await fetch("/api/v1/greetings");
  const data = await response.json();
  return data.greeting;
});

const greetingSlice = createSlice({
  name: "greeting",
  initialState: { loading: false, greeting: "", error: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.loading = false;
        state.greeting = action.payload;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
