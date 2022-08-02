import * as React from "react";
import "./ProfileSideBar.css";
import { IoGridSharp, IoSettingsOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import apiClient from "../../services/apiClient"
import { useAuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom"

export default function ProfileSideBar() {
  const [currentTab, setCurrentTab] = React.useState("dashboard");
  const navigate = useNavigate()

  const { setUser } = useAuthContext()

  /*
  Added the functionality to log an user out
  Redirects user to the login page
   */
  const handleLogOut = async () => {
    await apiClient.logoutUser()
    setUser({})
    navigate("/login")
  }
  return (
    <div className="profile-side-bar">
      <div className="top-tabs">
        <div
          className="psb-tab"
          onClick={() => {
            setCurrentTab("dashboard");
          }}
        >
          <IoGridSharp
            color={currentTab === "dashboard" ? "#B261F1" : "white"}
            size="25px"
          />
          <p className={currentTab === "dashboard" ? "purple-tab" : "psb-text"}>
            Dashboard
          </p>
        </div>
        <div
          className="psb-tab"
          onClick={() => {
            setCurrentTab("settings");
          }}
        >
          <IoSettingsOutline
            color={currentTab === "settings" ? "#B261F1" : "white"}
            size="25px"
          />
          <p className={currentTab === "settings" ? "purple-tab" : "psb-text"}>
            Settings
          </p>
        </div>
        <div
          className="psb-tab"
          onClick={() => {
            setCurrentTab("help");
          }}
        >
          <FiHelpCircle
            color={currentTab === "help" ? "#B261F1" : "white"}
            size="25px"
          />
          <p className={currentTab === "help" ? "purple-tab" : "psb-text"}>
            Help
          </p>
        </div>
      </div>
      <div className="filler"></div>
      <div className="logout-div">
        <MdLogout className="logout-btn" onClick={handleLogOut} color="white" size="25px" />
        <p className="psb-text logout-btn" onClick={handleLogOut}>Log Out</p>
      </div>
    </div>
  );
}
