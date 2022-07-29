import * as React from "react";
import "./Wishlist.css";
import WishlistDisplay from "../WishlistDisplay/WishlistDisplay"
import apiClient from "../../services/apiClient";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/auth";

export default function Wishlist() {

  const { user, wishlistList } = useAuthContext();
  const [wishlistItems, setWishlistItems]= useState([]);


    useEffect(() => {

      let copy = []
      
        wishlistList.map(async (e) => {
        try{
          const {data, error} = await apiClient.getProductById(e.shoe_id)
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
      return (
        <div className="wishlist">
          <div className="wishlist-tabs">
            <button className="wishlist-btn">Wishlist</button>
          </div>
          <div className="wishlist-empty">
              <div>Your wishlist is empty...</div>
          </div>
        </div>
      )
    }
    
}
