import React from "react";
import "../MovieCard/MovieCard.scss";

const MovieCard = (props) => {
  //   console.log(props);
  const { data } = props;
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt="" />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h6>{data.Title}</h6>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
