import React from "react";
import "../MovieCard/MovieCard.scss";
import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  //   console.log(props);
  const { data } = props;
  return (
    <div className="card-item">
      <Link to={`movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster !== "N/A" ? data.Poster : logo} alt="image" />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h6>{data.Title}</h6>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
