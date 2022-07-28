import * as React from "react";
import "./Wishlist.css";
import WishlistDisplay from "../WishlistDisplay/WishlistDisplay"
import apiClient from "../../services/apiClient";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/auth";

export default function Wishlist() {

  const [wishlistList, setWishlistList] = useState([])
  const { user } = useAuthContext()
  var wishlistItems= [];

  async function getWishlist() {
    try{
        const {data, error} = await apiClient.listWishList(user.id)
        setWishlistList(data.wishlist)
    }catch(error) {
        console.log(error)
    }
  }


  useEffect(() => {getWishlist()}, [] )

    if(wishlistList) {
      wishlistList.map(async (e) => {
        try{
          const {data, error} = await apiClient.getProductById(e.shoe_id)
          //console.log("product", data.product)
          wishlistItems.push(data.product)
          e.id = e.shoe_id
        } catch(error) {

        }
        
      })
    }
  console.log("wishlistItems", wishlistItems)
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
