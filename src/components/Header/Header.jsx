import React, { useState } from "react";
import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import "../Header/Header.scss";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(term);
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className="header">
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <div className="movie-app">Movie App</div>
        </Link>
      </div>

      <div className="searchBar">
        <form onSubmit={submitHandler} action="">
          <input
            name=""
            id=""
            type="text"
            value={term}
            placeholder="Search Movie or Show"
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </div>

      <div className="logo">
        <div className="user-image">
          <img src={logo} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;
