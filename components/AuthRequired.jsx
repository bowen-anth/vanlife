import React from "react"
import { Outlet, Navigate } from "react-router-dom"

const AuthRequired = () => {
    const authenticated = true

            if (!authenticated) {
                return (
                <Navigate 
                    to="login" 
                    state={{message: "You must be logged in"}} 
                    />
                )
            } 
                return <Outlet />
}

export default AuthRequired