import * as React from "react";
import "./TrendingPage.css";
import TrendingSideBar from "../TrendingSideBar/TrendingSideBar";
import TrendingProducts from "../TrendingProducts/TrendingProducts";

export default function TrendingPage() {
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
