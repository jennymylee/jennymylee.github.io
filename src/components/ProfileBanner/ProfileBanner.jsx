import * as React from "react";
import "./ProfileBanner.css";
import { useAuthContext } from "../../contexts/auth";

export default function ProfileBanner() {
  const { user } = useAuthContext();
  return (
    <div className="profile-banner">
      <div className="profile-image">
        <img className="profile-icon" src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt=""/>
      </div>
      <div className="banner-gradient"></div>
      <div className="banner-bottom">
        <div className="user-info">
          <h5 className="pb-user-name">
            {user.first_name} {user.last_name}
          </h5>
          <p className="pb-user-role">Reseller</p>
        </div>
        {/* <button className="edit-profile-btn">Edit Profile</button> */}
      </div>
    </div>
  );
}
