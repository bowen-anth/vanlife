import React from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"

const AuthRequired = () => {
    // const authenticated = true
    const isLoggedIn = localStorage.getItem("loggedin")
    const location = useLocation()

            if (!isLoggedIn) {
                return (
                <Navigate 
                    to="login" 
                    state={{
                        message: "You must be logged in",
                        from: location.pathname
                    }}
                    replace
                    />
                )
            } 
                return <Outlet />
}

export default AuthRequired