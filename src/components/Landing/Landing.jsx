import * as React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const browse = async () => {
    navigate("/trending");
  };

  const signup = async () => {
    navigate("/register");
  };

  return (
    <div className="landing-page">
      <div className="Hero">
        <div className="Header">
          <h1>LOREMIPS</h1>
          <p>
            Lorem ipsum dolor adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim ve_niam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <button className="browse-btn" onClick={browse}>
            Start Browsing
          </button>
          <button className="signup-btn" onClick={signup}>
            Create an Account
          </button>
        </div>
        <div className="Hero-pic">
          <img src="img.png" alt="Hero Pic" />
        </div>
      </div>
    </div>
  );
}
