import { useState } from "react";
import Navbar from "../components/navbar";
import CustomFormField from "../components/custom_form_field.";
import "../styles/login.css"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = () => {
        console.log("email = ", email)
        console.log("passwoed = ",password)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    return (
        <form>
            <Navbar title={"Login"} />
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

                <div id="login-button" onClick={handleSubmit}>Login</div>



            </div>
        </form>
    );
}
export default Login