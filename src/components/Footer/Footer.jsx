import * as React from "react"
import "./Footer.css"

/*
Displays basic contact information
Renders inside LandingPage component
*/
export default function Footer(){
    
    return (
        <div className="footer-container">
            <div className="footer-head">
                <div className="footer-title">
                    Contact
                </div>
                <div className="footer-logo">
                    <i className="fa-brands fa-connectdevelop"></i>
                </div>
            </div>
            <div className="footer-description">
                <div className="footer-address">
                    <p className="street-address">6230 Stoneridge Mall Road</p>
                    <p className="city-state">Pleasanton, CA 94588</p>
                    <p className="country">United States of America</p>
                </div>
                
                <div className="footer-contact">
                    <p className="contact-tel">Tel: (605) 475-6959</p>
                    <p className="contact-email">Email: workday1codepath@gmail.com</p>
                </div>
            </div>
            <div className="footer-end">
                <div className="footer-social">
                    <i className="fa-brands fa-facebook fa-xl contact"></i>
                    <i className="fa-brands fa-instagram fa-xl contact"></i>
                    <i className="fa-brands fa-twitter fa-xl contact"></i>
                    <i className="fa-brands fa-linkedin fa-xl contact"></i>
                    <i className="fa-regular fa-envelope fa-xl contact"></i>
                </div>
                <div className="footer-copy">
                    <p>
                        Copyright © 2022 Lorem Ipsum -
                        all rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}