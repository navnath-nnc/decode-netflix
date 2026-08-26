import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },
    addTrailerVideo: (state, actions) => {
      state.trailerVideo = actions.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
