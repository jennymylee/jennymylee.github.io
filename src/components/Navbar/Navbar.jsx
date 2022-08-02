import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

/*
Renders inside App.jsx
Allows to user to switch to different pages
such as login, register, trending, etc
*/
export default function Navbar(props) {
  const { user, setSearchProducts } = useAuthContext();
  const [searchName, setSearchName] = React.useState("");
  const navigate = useNavigate();
  const login = async () => {
    navigate("/login");
  };

  const signup = async () => {
    navigate("/register");
  };

  const handleOnSubmit = async (e) => {
    if (e.key === "Enter") {
      setSearchProducts(searchName);
      navigate("/search");
    }
  };
  const handleOnChange = async (e) => {
    setSearchName(e.target.value);
  };
  return (
    <div className={props.color === "grey" ? "navbar grey" : "navbar black"}>
      <div className="content">
        <div className="nav-links">
          <div className="logo">
            <Link to="/">
              <i className="fa-brands fa-connectdevelop"></i>
            </Link>
          </div>
          <Link to="/">Home</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/articles">Articles</Link>
        </div>
        {Object.keys(user).length !== 0 ? (
          <div className="profile-link">
            <div className="search">
              <button
                className="search-submit"
                style={{
                  background: props.color === "black" ? "black" : "#212121",
                }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>

              <input
                type="text"
                className="search-text"
                placeholder="Shoe"
                onKeyPress={handleOnSubmit}
                onChange={handleOnChange}
              />
            </div>
            <Link to="/profile">
              <i className="fa-solid fa-user"></i>
              Hi, {user.first_name}
            </Link>
          </div>
        ) : (
          <div className="side-btn">
            <div className="search">
              <button
                className="search-submit"
                style={{
                  background: props.color === "black" ? "black" : "#212121",
                }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>

              <input
                type="text"
                className="search-text"
                placeholder="Shoe"
                onKeyPress={handleOnSubmit}
                onChange={handleOnChange}
              />
            </div>

            <button className="login" onClick={login}>
              Log In
            </button>

            <button className="signup" onClick={signup}>
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
