import React from "react";
import "../MovieListing/MovieListing.scss";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  //   console.log(movies);

  let renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div>error</div>
    );
//   console.log(renderMovies);
  return (
    <div className="movie-list">
      <h2>movies</h2>
      <div className="movie-container">{renderMovies}</div>
    </div>
  );
};

export default MovieListing;
