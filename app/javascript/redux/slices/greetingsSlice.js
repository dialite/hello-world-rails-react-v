// Update the fetchGreetingsThunk to extract the greeting attribute from the API response
export const fetchGreetingsThunk = createAsyncThunk(
  "greetings/fetchGreetings",
  async () => {
    const response = await http.get();
    return response.data.greeting; // extract greeting attribute directly
  }
);

// Update the initial state to hold a single greeting string instead of an array
const initialState = {
  isLoading: false,
  isFailed: false,
  greeting: [], // hold a single greeting string instead of an array
};

// Update the extraReducers to set the greeting attribute directly
const greetingsSlice = createSlice({
  name: "greetings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetingsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGreetingsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isFailed = false;
        state.greeting = action.payload; // set greeting attribute directly
      })
      .addCase(fetchGreetingsThunk.rejected, (state) => {
        state.isLoading = false;
        state.isFailed = true;
      });
  },
});
