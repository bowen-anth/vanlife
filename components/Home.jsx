import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <main className="home-main">
                <div className="home-main-content-container">
                    <div className="home-container-p">
                    <p className="home-title-p">You got the travel plans, we got the travel vans.</p>
                    <p className="home-sub-title-p">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    </div>
                    <Link className="home-button">Find your van</Link>
                </div>

            </main>
        </>
    )
}

export default Home