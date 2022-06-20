import {useState} from "react"
import axios from "axios";
import "./Auth.css";
import { useAuth } from "../../context/auth-context/AuthContext";
import { useNavigate,Link } from "react-router-dom";

const Login=()=>{
    const [userDetails,setUserDetails]=useState({email:"",password:""})
    const {authObject,authObjectDispatch}=useAuth()
 const navigate=useNavigate()

    const loginHandler=async(userDetail)=>{ 
        const{email,password}= userDetail;
        console.log(email, password);
        try{
          const response = await axios.post("/api/auth/login", { email, password })
          // console.log(response.data.encodedToken)
      localStorage.setItem("user", JSON.stringify(response.data))
      navigate(-1)
        }
        catch(error){
            console.log(error)
        }
    }
    
    return (
      <>
        {/* <input
          onChange={(e) =>
            setUserDetails((prevObj) => ({ ...prevObj, email: e.target.value }))
          }
          type="text"
          placeholder="email"
        />
         <div>{userDetails.email}</div>
        <input
          onChange={(e) =>
            setUserDetails((prevObj) => ({ ...prevObj, password: e.target.value }))
          }
          type="text"
          placeholder="password"
        />
        <div>{userDetails.password}</div>
        <button
          onClick={(e) => {
            e.preventDefault();
            loginHandler(userDetails);
          }}
        >
          Login
        </button> */}
        <div className="login-box">
          <div className="form-box">
            <h2 className="login-title">Login</h2>
            <form>
              <div className="input-box">
                <span className="user-data">email</span>
                <input
                  className="input"
                  onChange={(e) =>
                    setUserDetails((prevObj) => ({
                      ...prevObj,
                      email: e.target.value,
                    }))
                  }
                  value={userDetails.email}
                  type="text"
                  placeholder="enter your email"
                  name=""
                />
                <div>{userDetails.email}</div>
              </div>
              <div className="input-box">
                <span className="user-data">Password</span>
                <input
                  className="input"
                  onChange={(e) =>
                    setUserDetails((prevObj) => ({
                      ...prevObj,
                      password: e.target.value,
                    }))
                  }
                  value={userDetails.password}
                  type="password"
                  placeholder="enter password"
                  name=""
                />
                <div>{userDetails.password}</div>
              </div>
              {/* guest login  */}
              <div className="input-box">
                <button
                  className="login-btn"
                    onClick={(e) =>{
                       e.preventDefault();
                       const userData = {
                          email: "aksrao@gmail.com",
                          password: "aksrao123",
                        }
                        loginHandler(userData);
                      }}
                >
                  Guest Login
                </button>
              </div>

              <div className="input-box">
                <button
                  className="login-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    loginHandler(userDetails);
                  }}
                >
                  Login
                </button>
              </div>
              <div className="input-box">
                <p className="login-desc">
                  Don't have a account?
                  <Link to="/Signup">Signup here!</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      
      </>
    );
} 
export default Login;