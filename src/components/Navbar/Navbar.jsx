import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth"
import {useNavigate } from "react-router-dom"

/*
Renders inside App.jsx
Allows to user to switch to different pages
such as login, register, trending, etc
*/
export default function Navbar(props) {
  const { user , setSearchProducts} = useAuthContext()
  const [searchName, setSearchName] = React.useState("")
  const navigate = useNavigate()
  const login = async () => {
    navigate("/login");
  };

  const signup = async () => {
    navigate("/register");
  };

  const handleOnSubmit = async (e) => {
    if (e.key === 'Enter'){
      console.log("value", e.target.value)
      setSearchProducts(searchName)
      navigate("/search")
    }
  };
  const handleOnChange = async (e) => {
    setSearchName(e.target.value)
  }
  return (
    <div className="navbar">
      <div className="content">
        <div className="nav-links">
          <div className="logo">
            <Link to="/">
              <i className="fa-brands fa-connectdevelop"></i>
            </Link>
          </div>
          <Link to="/">Home</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </div>
        {Object.keys(user).length !== 0 ? (
          <div className="profile-link">
            <div className="search">

              <button className="search-submit"><i className="fa-solid fa-magnifying-glass"></i></button>

              <input type="text" className="search-text" placeholder="Shoe"/>

            </div>
            <Link to="/profile">
              <i className="fa-solid fa-user"></i>
              Hi, {user.first_name}
            </Link>
          </div>
        ) : (
          <div className="side-btn">
            <div className="search">

              <button className="search-submit"><i className="fa-solid fa-magnifying-glass"></i></button>

              <input type="text" className="search-text" placeholder="Shoe" onKeyPress={handleOnSubmit} onChange={handleOnChange}/>

            </div>

            <button className="login" onClick={login}>Log In</button>

            <button className="signup" onClick={signup}>Sign Up</button>

          </div>
        )}
      </div>
    </div>
  );
}
