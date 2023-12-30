import React from "react"
import { Outlet, Navigate } from "react-router-dom"

const AuthRequired = () => {
    const authenticated = false

            if (!authenticated) {
                return (
                <Navigate 
                    to="login" 
                    state={{message: "You must be logged in"}} 
                    />
                )
            } else if (authenticated) {
                return <Outlet />
            }
}

export default AuthRequired