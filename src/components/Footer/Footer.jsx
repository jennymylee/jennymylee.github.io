import * as React from "react"
import "./Footer.css"

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
                    <i className="fa-brands fa-facebook contact"></i>
                    <i className="fa-brands fa-instagram contact"></i>
                    <i className="fa-brands fa-twitter contact"></i>
                    <i className="fa-brands fa-linkedin contact"></i>
                    <i className="fa-regular fa-envelope contact"></i>
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