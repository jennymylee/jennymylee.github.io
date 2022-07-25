import * as React from "react";
import "./TrendingPage.css";
import TrendingSideBar from "../TrendingSideBar/TrendingSideBar";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import { useAuthContext } from "../../contexts/auth";
import apiClient from "../../services/apiClient";

export default function TrendingPage() {
  const { user, setUser, setError, error } = useAuthContext()
  // React.useEffect(() => {
  //   const fetchUser = async () => {
  //     const {data, error} = await apiClient.fecthUserFromToken()
  //     if(data){
  //       console.log("data in auth", data)
  //       setUser(data.user)
  //     }
  //     if(error){
  //       setError(error)
  //       console.log("error in trending", error)
  //     }
  //   }
  //   const token = localStorage.getItem("sneaker_store_token")
  //   if(token){
  //     apiClient.setToken(token)
  //     fetchUser()
  //   }
  // }, [])
  // const { user } = useAuthContext();
  console.log("user in trending page", user);
  return (
    <div className="trending-page">
      <TrendingSideBar />
      <div className="trending">
        <h1 className="trending-title">What's Trending</h1>
        <TrendingProducts />
      </div>
    </div>
  );
}
