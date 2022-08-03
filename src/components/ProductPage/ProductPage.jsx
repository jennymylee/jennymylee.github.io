import * as React from "react";
import "./ProductPage.css";
import { useNavigate, Routes, Route } from "react-router-dom"
import Footer from "../Footer/Footer"
import ProductDetails from "../ProductDetails/ProductDetails";
import Similar from "../Similar/Similar";
import { useState } from "react";
/*
The ProductPage component will be render/referenced in the App.jsx file
ProductPage is set to the "/product/*" route. The ProductPage component will be followed by navbar where
the user can switch to different routes. Then, the ProductPage will render
the ProductDetails component and Footer component which will finalized the content of the 
ProductPage page
 */
export default function ProductPage() {
  const navigate = useNavigate();

  const [shoeBrand, setShoeBrand] = useState();
  const [shoeName, setShoeName] = useState();
  return (
    <div className="product-page">
      
      
      <div className="product-detail">
        <ProductDetails shoeBrand={shoeBrand} setShoeName={setShoeName} setShoeBrand={setShoeBrand}/>
      </div>

      <div className="similar">
        <Similar shoeBrand={shoeBrand} shoeName={shoeName}/>
      </div>
      {/* The Footer component will display information about how to contact our group with an question
      via social media or email */}
      <Footer></Footer>
    </div>
  );
}
