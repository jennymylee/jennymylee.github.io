import * as React from "react";
import "./ProfilePage.css";
import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";
import ProfileBanner from "../ProfileBanner/ProfileBanner";
import Wishlist from "../Wishlist/Wishlist";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth";

export default function ProfilePage() {
  //used to navigate users to different pages
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();

  React.useEffect(() => {
    console.log("user", user);
    if (user === {}) {
      console.log("in here");
      navigate("/login");
    }
  }, []);

  return (
    <div className="profile-page">
      <ProfileSideBar />
      <div className="profile">
        <h1 className="profile-title">My Profile</h1>
        <ProfileBanner />
        <Wishlist />
      </div>
    </div>
  );
}
