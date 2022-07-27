import * as React from "react";
import "./Wishlist.css";
import TrendingProducts from "../TrendingProducts/TrendingProducts"
import apiClient from "../../services/apiClient";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/auth";

export default function Wishlist() {

  const [trendingProducts, setTrendingProducts] = useState()
  const { user } = useAuthContext()

  async function getWishlist() {
    try{
        const {data, error} = await apiClient.listWishList(user.id)
        setTrendingProducts(data.wishlist)
    }catch(error) {
        console.log(error)
    }
  }

  console.log("Trending", trendingProducts)

  useEffect(() => {getWishlist()}, [] )

  if(trendingProducts) {
    trendingProducts.map((e) => {
      console.log(e)
    e.id = e.shoe_id
  })
  }
  
  return (
    <div className="wishlist">
      <div className="wishlist-tabs">
        <button className="wishlist-btn">Wishlist</button>
      </div>
      <div className="wishlist-items">
        <TrendingProducts trendingProducts={trendingProducts}/>
      </div>
    </div>
  );
}
