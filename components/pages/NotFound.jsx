import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
        <div className="not-found-container">
            <h1 className="not-found-h1">Sorry, the page you were looking for was not found.</h1>
            <Link to="/"><button className="return-to-home-button">Return to home</button></Link>
        </div>
        </>
    )
}

export default NotFound