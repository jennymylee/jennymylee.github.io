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
                <p>
                    Lorem ipsum dolor adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
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
                        Copyright © 2022 Lorem Ipsum
                        all rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}