import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieDetail,
  getSelectedMovieorShow,
} from "../../features/movies/movieSlice";

const MovieDetail = () => {
  const { imdbId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieorShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(imdbId));
  }, [dispatch, imdbId]);
  console.log(imdbId);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>IMDB Rating:{data.imdbRating}</span>
              <span>votes:{data.imdbVotes}</span>
              <span>Runtime:{data.Runtime}</span>
              <span>Year:{data.Year}</span>
            </div>
            <div className="movie-plot">
              <div className="movie-info">
                <div>
                  <span>Director:{data.Director}</span>
                  <span>Stars:{data.Stars}</span>
                  <span>Generes:{data.Genre}</span>
                  <span>Languages:{data.Language}</span>
                  <span>Awards:{data.Awards}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
