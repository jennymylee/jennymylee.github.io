import * as React from "react";
import "./Wishlist.css";
import WishlistDisplay from "../WishlistDisplay/WishlistDisplay"
import apiClient from "../../services/apiClient";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/auth";

export default function Wishlist() {

  const { user, wishlistList } = useAuthContext();
  const [wishlistItems, setWishlistItems]= useState([]);
  console.log("WishlistList", wishlistList)

    

    useEffect(() => {

      let copy = []
      
        console.log("Step 1")
        wishlistList.map(async (e) => {
        try{
          const {data, error} = await apiClient.getProductById(e.shoe_id)
          console.log("Step 2")
          console.log("product", data.product)
          setWishlistItems(wishlistItems => [...wishlistItems, data.product])
          
          e.id = e.shoe_id
        } catch(error) {
        }
      })
        
    }, [] )

    if(wishlistItems && wishlistItems.length > 0){
      return (
      <div className="wishlist">
        <div className="wishlist-tabs">
          <button className="wishlist-btn">Wishlist</button>
        </div>
        <div className="wishlist-items">
            <WishlistDisplay wishlistItemsRaw={wishlistItems}/>
        </div>
      </div>
    );
    } else {
      return <div>Loading...</div>;
    }
    
}
