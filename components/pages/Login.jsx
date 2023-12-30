import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../../api.js"

const Login = () => {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const location = useLocation()

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)

        // loginUser(loginFormData)
        //     .then(data => console.log(data))

    
        async function callLoginUser() {
            const response = await loginUser(loginFormData)
            console.log(response)
        }
        callLoginUser()
}

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <div className="login-container">
                {location.state?.message && <h1 className="login-first">{location.state.message}</h1>}
                <h1>Sign in to your account</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        name="email"
                        onChange={handleChange}
                        type="email"
                        placeholder="Email address"
                        value={loginFormData.email}
                    />
                    <input
                        name="password"
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                        value={loginFormData.password}
                    />
                    <button>Log in</button>
                </form>
            </div>
        </>
    )
}

export default Login