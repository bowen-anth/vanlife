import React from "react"
import { Outlet, NavLink } from "react-router-dom"
// import Income from "./pages/Host/Income"
// import Reviews from "./pages/Host/Reviews"
// import HostVans from "./pages/Host/HostVans"

const HostLayout = () => {
    const activeStyle = {
        fontWeight: 900,
        textDecoration: "underline"
      }
    return (
        <>
            <nav className="host-nav">
                <NavLink 
                className="link-styles"
                style={({isActive}) => isActive ? activeStyle : null} 
                end
                to="."
                >
                    Dashboard
                </NavLink>
                
                <NavLink 
                className="link-styles"
                style={({isActive}) => isActive ? activeStyle : null}  
                to="income">
                    Income
                </NavLink>

                <NavLink 
                className="link-styles"
                style={({isActive}) => isActive ? activeStyle : null}  
                to="vans"
                >
                    Vans
                </NavLink>
                
                <NavLink 
                className="link-styles"
                style={({isActive}) => isActive ? activeStyle : null}  
                to="reviews"
                >
                    Reviews
                </NavLink>
                <Outlet />
            </nav>
        </>
    )
}

export default HostLayout