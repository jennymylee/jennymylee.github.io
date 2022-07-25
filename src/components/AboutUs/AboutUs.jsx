import * as React from "react"
import "./AboutUs.css"

export default function AboutUs(){
    return (
        <div className="about-container">
            <div className="about-title">
                About Us
            </div>
            <div className="about-info">
                <div className="about-card">
                    <i className="fa-regular fa-lightbulb fa-xl fafafa"></i>
                    <p>“Webpage_Name” is a online platform for the greatest sneakers products from the past, present, and future.
                        An all in one platform, our real-time marketplace works just like the stock market, allowing users to see
                        the most coveted items at their true market place.
                    </p>
                </div>
                <div className="about-card">
                    <i className="fa-solid fa-circle-dollar-to-slot fa-xl fafafa"></i>
                    <p>Augue ut lectus arcu bibendum at varius vel. Ac ut consequat semper viverra nam libero justo laoreet sit.
                        Lectus vestibulum mattis ullamcorper velit sed. Risus feugiat in ante metus dictum at tempor commodo ullamcorper.
                    </p>
                </div>
                <div className="about-card">
                    <i className="fa-solid fa-chart-line fa-xl fafafa"></i>
                    <p>
                    Facilisis leo vel fringilla est. Non diam phasellus vestibulum lorem sed risus. Sapien et ligula ullamcorper malesuada
                    proin libero. Libero justo laoreet sit amet cursus sit amet dictum. Porta lorem mollis aliquam ut porttitor. 
                    </p>
                </div>
            </div>
        </div>
    )
}