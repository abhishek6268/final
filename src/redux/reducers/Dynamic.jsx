//  crating an state fordynamic content generation

import { createSlice } from "@reduxjs/toolkit";

const dynamic = createSlice({
  name: "dynamic",
  initialState: {
    dynamic: {
      home: {
        homeSlider: {
            // image url goes here
          sliderimages: [
          ],
        },
      },
    },
    loading: false,
    error: null,
  },
  reducers: {
    setDynamic: (state, action) => {
      state.dynamic = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default dynamic.reducer;
