import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieAPI from "../../common/apis/MovieAPI";
import { APIkey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "harry";

    const fetchMovies = async () => {
      try {
        const response = await MovieAPI.get(
          `?apikey=${APIkey}&s=${movieText}&type=movie`
        );
        dispatch(addMovies(response.data));
        // console.log(response);
      } catch (e) {
        console.log(e);
      }
    };

    fetchMovies();
  }, []);
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
