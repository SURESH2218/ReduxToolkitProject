import React from "react";
import "../MovieListing/MovieListing.scss";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllShows,
  getMoviesLoading,
} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const loading = useSelector(getMoviesLoading);

  const renderSkeletons = () => (
    <div className="skeleton-container">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          className="skeleton-item"
          style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}
          key={index}
        >
          <Skeleton height={300} width={300} />
          <Skeleton height={300} width={300} />
          <Skeleton height={300} width={300} />
          <Skeleton height={300} width={300} />
          <Skeleton height={300} width={300} />
          <Skeleton height={300} width={300} />
          <Skeleton height={300} width={300} />
          <Skeleton height={300} width={300} />
        </div>
      ))}
    </div>
  );

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

  return (
    <div className="movie-list">
      <h2>Movies</h2>
      {loading ? (
        renderSkeletons()
      ) : (
        <div className="movie-container">{renderMovies}</div>
      )}
      <h3>Shows</h3>
      {loading ? (
        renderSkeletons()
      ) : (
        <div className="movie-container">{renderShows}</div>
      )}
    </div>
  );
};

export default MovieListing;
