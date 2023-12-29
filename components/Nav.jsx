import React from "react"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

const Nav = () => {
    const activeStyle = {
        fontWeight: 900,
        textDecoration: "underline"
      }
    return (
        <>
                <nav className="nav">
                    <span className="van-life-span"><NavLink className={"link-styles van-life-span"} to="/">#VANLIFE</NavLink></span>
                    <div className="nav-link-container">
                        <NavLink className="link-styles nav-links" 
                        style={({isActive}) => isActive ? activeStyle : null}
                        to="host">Host</NavLink>
                        <NavLink className="link-styles nav-links" 
                        style={({isActive}) => isActive ? activeStyle : null}
                        to="about">About</NavLink>
                        <NavLink className="link-styles nav-links" 
                        style={({isActive}) => isActive ? activeStyle : null}
                        to="vans">Vans</NavLink>
                    </div>
                </nav>
        </>
    )
}

export default Nav