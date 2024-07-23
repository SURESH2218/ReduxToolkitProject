import React from "react";
import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import "../Header/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="movie-app">Movie App</div>
      </Link>
      <div className="logo">
        <div className="user-image">
          <img src={logo} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;
