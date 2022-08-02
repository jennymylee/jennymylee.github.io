import * as React from "react";
import "./TrendingFooter.css";

// This is the footer for the trending page
export default function TrendingFooter() {

  return (
    <div className="trending-footer">
      <div className="tfooter-head">
        <div className="footer-title">Contact</div>
        <div className="tfooter-logo">
          <i className="fa-brands fa-connectdevelop fa-3x"></i>
        </div>
      </div>
      <div className="tfooter-description">
        <div className="footer-address">
          <p className="street-address">6230 Stoneridge Mall Road</p>
          <p className="city-state">Pleasanton, CA 94588</p>
          <p className="country">United States of America</p>
        </div>
        
        <div className="footer-contact">
          <p className="contact-tel">Tel: ( 6 0 5 ) 4 7 5 - 6 9 5 9</p>
          <p className="contact-email">Email: workday1codepath@gmail.com</p>
        </div>
      </div>
      <div className="tfooter-end">
        <div className="footer-social">
          <i className="fa-brands fa-facebook fa-xl contact"></i>
          <i className="fa-brands fa-instagram fa-xl contact"></i>
          <i className="fa-brands fa-twitter fa-xl contact"></i>
          <i className="fa-brands fa-linkedin fa-xl contact"></i>
          <i className="fa-regular fa-envelope fa-xl contact"></i>
        </div>
        <div className="footer-copy">
          <p>Copyright © 2022 Lorem Ipsum all rights reserved</p>
        </div>
      </div>
    </div>
  );
}
