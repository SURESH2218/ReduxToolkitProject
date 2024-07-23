import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieAPI from "../../common/apis/MovieAPI";
import { APIkey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import {
  addMovies,
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "stranger things";
  useEffect(() => {
    dispatch(fetchAsyncMovies("Harry"));
    dispatch(fetchAsyncShows("anime"));
  }, [dispatch]);
  return (
    <>
      <div style={{ margin: "30px" }}>
        <div className="banner-img"></div>
        <MovieListing />
      </div>
    </>
  );
};

export default Home;
