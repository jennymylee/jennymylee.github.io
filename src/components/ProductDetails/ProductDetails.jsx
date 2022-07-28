import * as React from "react";
import "./ProductDetails.css";
import heartOutline from "./img/heart-outline.png";
import heartFill from "./img/heart-fill.png";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import apiClient from "../../services/apiClient";
import { useAuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

import Modal from "@mui/material/Modal";

export default function ProductDetails(props) {
  let { productId } = useParams();

  //used to navigate users to different pages
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();

  //initializes shoe
  const [shoe, setShoe] = useState({
    id: 0,
    name: "",
    brand: "",
    colorway: "",
    silhouette: "",
    release_year: "",
    release_date: "",
    retail_price: 0,
    market_price: 0,
    description: "",
    image_url: "",
    current_bid: 0,
    lowest_ask: 0,
    total_sales: 0,
  });

  //calls getProductById route with parameter of product ID to fetch the specific shoe
  async function getProduct() {
    try {
      const { data, error } = await apiClient.getProductById(productId);
      setShoe(data.product);
    } catch (error) {
      //console.log(error)
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  //creates date varaible
  const d = new Date(shoe.release_date);

  //used for wishlist button
  const [addedToWishlist, setAddedToWishlist] = useState("Add to Wishlist");
  const [heartImg, setHeartImg] = useState(heartOutline);

  //Called when a user wants to add/remove this item to their wishlist.
  //If the item is not yet added to the wishlist, add to wishlist,
  //change text.
  //Else, if item is already in wishlist, remove from wishlist,
  //change text
  const toggleWishlist = async () => {
    if (addedToWishlist == "Add to Wishlist") {
      // if user does not exist, open modal
      if (Object.keys(user).length === 0) {
        setOpen(true);
      } // else, add item to wishlist and change icon
      else {
        setAddedToWishlist("Remove from Wishlist");
        setHeartImg(heartFill);
      }
    } else {
      setAddedToWishlist("Add to Wishlist");
      setHeartImg(heartOutline);
    }
  };

  const selectShoeSize = async () => {
    //console.log("Shoesize clicked")
  };

  props.setShoeBrand(shoe.brand);

  // state to open or close modal
  const [open, setOpen] = React.useState(false);

  // open is false when this function is called
  const handleClose = () => setOpen(false);

  return (
    <div className="product-details">
      <div className="shoe-info">
        {/* Displays info about shoe appearance/history  */}
        <div className="shoe-card">
          <div className="card-header">
            <h1 className="shoe-name">{shoe.name}</h1>
            <h2 className="colorway">{shoe.colorway}</h2>
          </div>

          <div className="shoe-img">
            <img src={shoe.image_url} width="300px" />
          </div>
          <div className="shoe-details">
            <h2>Details</h2>
            <div className="price-date">
              <p className="retail-price">Retail Price: ${shoe.retail_price}</p>
              <p className="release-date">
                Release Date: {d.getMonth()}/{d.getDay()}/{d.getFullYear()}
              </p>
            </div>
            <p className="description">Description: {shoe.description}</p>
          </div>
        </div>

        {/* This displays the information on the right side of the page. It includes market information */}
        <div className="price-card">
          {/* displays current price of sneaker */}
          <div className="current-price">
            <h1 className="price-header">Current Price</h1>
            <h1 className="price-value">${shoe.market_price}</h1>
          </div>

          <div className="shoe-size">
            <button className="size-btn" onClick={selectShoeSize}>
              <h1>Select Size</h1>
            </button>
            {/* Render shoe size component */}
          </div>

          <div className="auction-info">
            {/* displays current bid */}
            <div className="bids">
              <p className="bids-header">Current Bid</p>
              <p className="bids-value">${shoe.current_bid}</p>
            </div>
            {/* displays lowest ask */}
            <div className="asks">
              <p className="asks-header">Lowest Ask</p>
              <p className="asks-value">${shoe.lowest_ask}</p>
            </div>
            {/* displays total sales*/}
            <div className="total-sales">
              <p className="sales-header">Total Sales</p>
              <p className="sales-value">{shoe.total_sales}</p>
            </div>
          </div>

          <div className="toggle-wishlist">
            {/* Button to add to wishlist */}
            <button className="toggle-btn" onClick={toggleWishlist}>
              <div className="heart-img">
                <img src={heartImg} alt="heart" width="100px" />
              </div>
              <div className="wishlist-text">{addedToWishlist}</div>
            </button>
            {/* Modal pops up when user is not authenticated */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="user-login-modal">
                <p className="modal-text">
                  Log in to add this item to your wishlist.
                </p>
                <div className="modal-btn-row">
                  {/* log in button */}
                  <button
                    className="modal-login-btn"
                    onClick={() => navigate("/login")}
                  >
                    Log in
                  </button>
                  {/* cancel button */}
                  <button
                    className="modal-cancel-btn"
                    onClick={() => handleClose()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>
          </div>

          <div className="email-updates">
            <h4>Receive updates (Coming soon...)</h4>
            {/* render email updates component */}
          </div>
        </div>
      </div>

      <div className="price-history">
        <h1>Price History (Coming soon...)</h1>
      </div>
    </div>
  );
}
