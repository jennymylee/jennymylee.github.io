import * as React from "react";
import "./Wishlist.css";
import WishlistDisplay from "../WishlistDisplay/WishlistDisplay"
import apiClient from "../../services/apiClient";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/auth";
import { useWishlistContext } from "../../contexts/wishlist";

export default function Wishlist() {

  const [wishlistList, setWishlistList] = useState([{}])
  const { user } = useAuthContext()
  const wishlistItems= []

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
        console.log("this is data", data)
        wishlistItems.push(data)
        console.log("data", wishlistItems)
        e.id = e.shoe_id
      })
      
    }

    // if(wishlistItems) {
    //   console.log("ITEM", wishlistItems)
    // }
    // else {
    //   console.log("NOPE")
    // }
  
  if(wishlistItems) {
    return (
      <div className="wishlist">
        <div className="wishlist-tabs">
          <button className="wishlist-btn">Wishlist</button>
        </div>
        <div className="wishlist-items">
          <WishlistDisplay wishlistItems={wishlistItems}/>
        </div>
      </div>
    );
  }
  else {
    return <div>Loading...</div>;
  }
}
