import { Link } from "react-router-dom"

export const LoginButton = () => {
    return (
        <div>
            <Link to="/" className="btn login-button">Sign Up</Link>
            <Link to="/" className="btn login-button">Login</Link>
        </div>
    )
}