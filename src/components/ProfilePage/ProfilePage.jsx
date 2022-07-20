import * as React from "react";
import "./ProfilePage.css";
import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";
import ProfileBanner from "../ProfileBanner/ProfileBanner";
import Wishlist from "../Wishlist/Wishlist";

export default function ProfilePage() {
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
