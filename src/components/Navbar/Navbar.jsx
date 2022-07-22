import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const user = false;

  const logoutUser = async () => {
    // setUser()
  };
  return (
    <div className="navbar">
      <div className="content">
        <div className="nav-links">
          <div className="logo">
            <Link to="/">
              <img src={"logo"} alt="Logo" width="60" />
            </Link>
          </div>
          <Link to="/">Home</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <a> Search </a>
        </div>
        {user ? (
          <button className="side-btn btn" onClick={logoutUser}>
            <a>Log Out</a>
          </button>
        ) : (
          <div className="side-btn">
            <div className="btn">
              <Link to="/login">Login</Link>
            </div>

            <div className="btn">
              <Link to="/register">Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </div>

    // <div>
    //     <p>Hello</p>
    // </div>
  );
}
