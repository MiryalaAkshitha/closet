
import "./Auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({ email: "", password: "", firstName: "", lastName: "" });

    console.log("hello signup!")
    const signupHandler = async (e) => {
        e.preventDefault();
        const { email, password,firstName,lastName } = userDetails;
        try {
            const response = await axios.post("/api/auth/signup", { email, password, firstName, lastName })
            console.log(response)
            localStorage.setItem("user", JSON.stringify(response.data))
            navigate("/")
        }
        catch (error) {
            console.log(error)
        }
    }


    return(
        <div className="login-box">
        <div className="form-box">
            <h2 className="login-title">Sign up</h2>
            <form onSubmit={signupHandler}>
                <div className="input-box">
                    <span className="user-data">First Name</span>
                        <input  className="input" onChange={(e) =>
                            setUserDetails((prevObj) => ({
                                ...prevObj,
                                firstName: e.target.value,
                            }))
                        }
                            value={userDetails.firstName} type="text" placeholder="enter your first name" name="" required/>
                </div>
                <div className="input-box">
                    <span className="user-data">Last Name</span>
                        <input className="input" onChange={(e) =>
                            setUserDetails((prevObj) => ({
                                ...prevObj,
                                lastName: e.target.value,
                            }))
                        }
                            value={userDetails.lastName} type="text" placeholder="enter your last name" name="" required/>
                    </div>
                    <div className="input-box">
                        <span className="user-data">Email</span>
                        <input className="input" onChange={(e) =>
                            setUserDetails((prevObj) => ({
                                ...prevObj,
                                email: e.target.value,
                            }))
                        }
                            value={userDetails.email} type="text" placeholder="enter your email" name="" required />
                    </div>
                <div className="input-box">
                    <span className="user-data">Password</span>
                        <input className="input" onChange={(e) =>
                            setUserDetails((prevObj) => ({
                                ...prevObj,
                                password: e.target.value,
                            }))
                        }
                            value={userDetails.password} type="password" placeholder="enter password" name="" required/>
                </div>
                <div className="input-box">
                    <button type="submit" className="login-btn">Signup</button>
                </div>
            </form>
        </div>
    </div>
    )
    }
export default Signup;