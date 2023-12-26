import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const About = () => {
    return (
        <>
            {/* <img 
            className="about-picture"
            src="../public/van-outdoor-night.png" 
            width="300px" height="auto" 
            alt="a van outdoors at night" 
            /> */}
            <div className="about-container">
                <div className="about-picture-container">
                {/* pictures is in css background prop */}
                </div>
                <div className="about-text-container">
                    <h1 className="about-h1">Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p className="about-p">Our mission is to enliven your road trip with the perfect travel van rental. 
                        Our vans are recertified before each trip to ensure your travel plans can go off without 
                        a hitch. (Hitch costs extra 😉)
                    </p>
                    <p className="about-p">
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring 
                        the world on 4 wheels.
                    </p>
                </div>
                <div className="about-destination-container">
                    <h2 className="about-destination-h2">Your destination is waiting.</h2>
                    <h2 className="about-destination-h2">Your van is ready.</h2>
                    <Link className="about-destination-button">Explore our vans</Link>
                </div>
            </div>
        </>
    )
}

export default About