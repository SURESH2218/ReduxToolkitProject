import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieAPI from "../../common/apis/MovieAPI";
import { APIkey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    try {
      const response = await MovieAPI.get(
        `?apikey=${APIkey}&s=${term}&type=movie`
      );
      return response.data;
    } catch (e) {
      console.log(e);
      throw new Error(e.response?.data?.Error || "Something went wrong");
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    try {
      const response = await MovieAPI.get(
        `?apikey=${APIkey}&s=${term}&type=series`
      );
      return response.data;
    } catch (e) {
      console.log(e);
      throw new Error(e.response?.data?.Error || "Something went wrong");
    }
  }
);
export const fetchAsyncMovieDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    try {
      const response = await MovieAPI.get(
        `?apikey=${APIkey}&i=${id}&Plot=full`
      );
      return response.data;
    } catch (e) {
      console.log(e);
      throw new Error(e.response?.data?.Error || "Something went wrong");
    }
  }
);

const initialState = {
  movies: [],
  shows: [],
  selectedMovieorShow: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        console.log("pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
        console.log("fetched successfully");
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state, action) => {
        console.log("rejected");
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAsyncShows.fulfilled, (state, action) => {
        console.log("fetched successfully");
        state.loading = false;
        state.shows = action.payload;
      })
      .addCase(fetchAsyncMovieDetail.fulfilled, (state, action) => {
        console.log("fetched successfully");
        state.loading = false;
        state.selectedMovieorShow = action.payload;
      });
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieorShow = (state) =>
  state.movies.selectedMovieorShow;

export const getMoviesLoading = (state) => state.movies.loading;
export const getMoviesError = (state) => state.movies.error;
export default movieSlice.reducer;
