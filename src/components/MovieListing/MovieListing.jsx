import React from "react";
import "../MovieListing/MovieListing.scss";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  //   console.log(movies);

  let renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div>error</div>
    );
  let renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <div>error</div>
    );

  //   console.log(renderMovies);
  return (
    <div className="movie-list">
      <h2>movies</h2>
      <div className="movie-container">{renderMovies}</div>
      <h3>Shows</h3>
      <div className="movie-container">{renderShows}</div>
    </div>
  );
};

export default MovieListing;