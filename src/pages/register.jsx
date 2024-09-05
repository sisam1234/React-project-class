import { useState } from "react";
import CustomFormField from "../components/custom_form_field.";
import '../styles/register.css';

const Register = () => {
    const [fullname, setFullName] = useState("")
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [cpassword, setConfirmPassword] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
       
        if(email.length==0){
            alert("Please enter email")
            return
        }
        if(password.length<6){
            alert("Please enter strong password")
            return
        }
        if(cpassword!=password){
            alert("Password doesnot match")
            return
        }
        console.log("fullname = ", fullname)
        console.log("username = ", username)
        console.log("email = ", email)
        console.log("password = ", password)
        console.log("phone = ", phone)
        console.log("gender = ", gender)
        console.log("cpassword = ", cpassword)
    }
    const handleFullNameChange = (event) => {
        setFullName(event.target.value)
    }
    const handleUserNameChange = (event) => {
        setUserName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }
    const handleGendrChange = (event) => {
        setGender(event.target.value)
    }
    return (
        <div className="register-container">
        <form onSubmit={handleSubmit}>
            <div id="register-box">
                <h1>Registration</h1>
                <div className="reg-row-field">
                    <CustomFormField
                        label="Full Name"
                        cName="fullname"
                        placeholder="Enter your full name"
                        type="text"
                        value={fullname}
                        onChange={handleFullNameChange}
                    />
                    <CustomFormField
                        label="User Name"
                        cName="username"
                        placeholder="Enter your user name"
                        type="text"
                        value={username}
                        onChange={handleUserNameChange}
                    />
                </div>
                <div className="reg-row-field">
                    <CustomFormField
                        label="Email"
                        cName="email"
                        placeholder="Enter your email"
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <CustomFormField
                        label="Phone Number"
                        cName="phone"
                        placeholder="Enter your user phone"
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                </div>
                <div className="reg-row-field">
                    <CustomFormField
                        label="Password"
                        cName="password"
                        placeholder="Enter your password"
                        type="text"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <CustomFormField
                        label=" Confirm Password"
                        cName="password"
                        placeholder="Confirm your password"
                        type="text"
                        value={cpassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
                {/* <h1>Gender</h1>
            <div className="reg-radio-field">
            <CustomFormField
                    cName="gender"
                    type="radio"
                  
                />Male
                <CustomFormField
                    cName="gender"
                    type="radio"
                    
                />Female
                 <CustomFormField
                   cName="gender"
                   type="radio"
                   
               />Other
            </div> */}
                <div className="gender-field">
                    <h3>Gender</h3>
                    <div className="gender-options">
                        <div className="gender">
                            <input type="radio" value="Male" name="gender" onChange={handleGendrChange}/>
                            <p>Male</p>
                        </div>
                        <div className="gender">
                            <input type="radio" value="Female" name="gender" onChange={handleGendrChange}/>
                            <p>Female</p>
                        </div>
                        <div className="gender">
                            <input type="radio" value="PreferNotToSay" name="gender" onChange={handleGendrChange}/>
                            <p>Prefer Not To Say</p>
                        </div>
                    </div>
                </div>
                <div id="register-button">
                    <input type="submit" value="Register" />
                </div>
            </div>
        </form>
        </div>
    );
}
export default Register