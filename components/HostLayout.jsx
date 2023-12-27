import React from "react"
import { Link, Outlet } from "react-router-dom"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"

const HostLayout = () => {
    return (
        <>
            <nav className="host-nav">
                <Link className="link-styles" to="/host">Dashboard</Link>
                <Link className="link-styles" to="/host/income">Income</Link>
                <Link className="link-styles" to="/host/reviews">Reviews</Link>
                <Outlet />
            </nav>
        </>
    )
}

export default HostLayout