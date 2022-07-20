import * as React from "react";
import "./ProfileBanner.css";

export default function ProfileBanner() {
  return (
    <div className="profile-banner">
      <div className="profile-image"></div>
      <div className="banner-gradient"></div>
      <div className="banner-bottom">
        <div className="user-info">
          <h5 className="pb-user-name">Jenny Lee</h5>
          <p className="pb-user-role">Reseller</p>
        </div>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
    </div>
  );
}
