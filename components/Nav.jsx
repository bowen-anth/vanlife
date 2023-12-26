import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const Nav = () => {
    return (
        <>
                <nav className="nav">
                    <span className="van-life-span"><Link className={"link-styles"} to="/">#VANLIFE</Link></span>
                    <div className="nav-link-container">
                        <Link className={"link-styles"} to="/about">About</Link>
                        <Link className={"link-styles"} to="/vans">Vans</Link>
                    </div>
                </nav>
        </>
    )
}

export default Nav