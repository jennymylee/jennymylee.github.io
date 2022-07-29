import * as React from "react";
import "./ProfilePage.css";
import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";
import ProfileBanner from "../ProfileBanner/ProfileBanner";
import Wishlist from "../Wishlist/Wishlist";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/auth";
import { useState, useEffect} from "react";
import apiClient from "../../services/apiClient";

export default function ProfilePage() {

  //window.setTimeout(function(){window.location.reload()},3000)
  //used to navigate users to different pages
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();
  const [wishlistList, setWishlistList] = useState()

  // if user is not logged in, they are redirected to
  // login page
  React.useEffect(() => {
    // if (Object.keys(user).length === 0) {
    //   navigate("/login");
    // }

    if(localStorage.getItem("sneaker_store_token") === "") {
      navigate("/login");
    }
  }, []);

  


     return (
          <div className="profile-page">
            <ProfileSideBar />
            <div className="profile">
              <h1 className="profile-title">My Profile</h1>
              <ProfileBanner />
              <Wishlist wishlistList={wishlistList}/>
            </div>
          </div>
        );
}
  
       
