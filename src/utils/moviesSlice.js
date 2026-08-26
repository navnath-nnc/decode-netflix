import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },

    addPopularMovies: (state, actions) => {
      state.popularMovies = actions.payload;
    },

    addTopRatedMovies: (state, actions) => {
      state.topRatedMovies = actions.payload;
    },

    addUpcomingMovies: (state, actions) => {
      state.upcomingMovies = actions.payload;
    },

    addTrailerVideo: (state, actions) => {
      state.trailerVideo = actions.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailerVideo,
} = moviesSlice.actions;
export default moviesSlice.reducer;
