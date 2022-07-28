import * as React from "react";
import "./Wishlist.css";
import TrendingProducts from "../TrendingProducts/TrendingProducts"
import apiClient from "../../services/apiClient";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/auth";

export default function Wishlist() {

  const [wishlistList, setWishlistList] = useState()
  const { user } = useAuthContext()
  let wishlistItems = []

  async function getWishlist() {
    try{
        const {data, error} = await apiClient.listWishList(user.id)
        setWishlistList(data.wishlist)
    }catch(error) {
        console.log(error)
    }
  }

  console.log("Trending", wishlistList)

  useEffect(() => {getWishlist()}, [] )

    if(wishlistList) {
      wishlistList.map(async (e) => {
        const {data, error} = await apiClient.getProductById(e.shoe_id)
        
        wishlistItems.push(data.product)
        console.log("data", wishlistItems)
        e.id = e.shoe_id
      })
      
    }

    if(wishlistItems) {
      console.log("ITEM", wishlistItems)
    }
    else {
      console.log("NOPE")
    }
  
  if(wishlistItems) {
    return (
      <div className="wishlist">
        <div className="wishlist-tabs">
          <button className="wishlist-btn">Wishlist</button>
        </div>
        <div className="wishlist-items">
          <TrendingProducts trendingProducts={wishlistItems}/>
        </div>
      </div>
    );
  }
  else {
    return <div>Loading...</div>;
  }
}
