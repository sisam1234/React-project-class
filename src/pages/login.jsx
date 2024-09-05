import { useState } from "react";
import Navbar from "../components/navbar";
import CustomFormField from "../components/custom_form_field.";
import "../styles/login.css"
import { Link } from "react-router-dom"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        if(email.length==0){
            alert("Please enter email")
            return
        }
        if(email.length<6){
            alert("Please enter strong password")
            return
        }
        console.log("email = ", email)
        console.log("password = ",password)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* <Navbar title={"Login"} /> */}
            <div id="login-box">

                <h1>LOGIN</h1>
                <CustomFormField
                    label="Email"
                    cName="email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}

                />
                <CustomFormField
                    label="Password"
                    cName="password"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />

                {/* <div id="login-button" onClick={handleSubmit}>Login</div> */}
                <div id ="login-button">
                <input type="submit"  value="Login"/>
            </div>
            <div id="signup-field">
                <p>Don't have account? <Link to ="/register">SignUp</Link></p>
            </div>
            </div>
        </form>
    );
}
export default Login