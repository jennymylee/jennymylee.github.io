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
                    <div className="icon">
                        <i className="fa-regular fa-lightbulb fa-xl fafafa"></i>
                    </div>
                    <p className="text">
                        “Webpage_Name” is a online platform for the greatest sneakers products from the past, present, and future.
                        An all in one platform, our real-time marketplace works just like the stock market, allowing users to see
                        the most coveted items at their true market place.
                    </p>
                </div>
                <div className="about-card">
                    <div className="icon">
                        <i class="fa-solid fa-globe fa-xl fafafa"></i>
                    </div>
                    <p className="text">
                        We thrive in connecting the sneakerhead community to one another. We are the gateway for introducting new members to the current trends happening worldwide 
                    </p>
                </div>
                <div className="about-card">
                    <div className="icon">
                        <i className="fa-solid fa-people-group fa-xl fafafa"></i>
                    </div>
                    <p className="text">
                        We pride ourselves on inclusivity, catering to both to experienced and inexperienced sneakerheads. We know the world of footware can be extensive, which is why we provide resources to help and inform those that are new into this space
                    </p>
                </div>
            </div>
        </div>
    )
}