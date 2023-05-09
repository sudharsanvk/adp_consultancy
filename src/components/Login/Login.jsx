import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import './Login.css'

function Login() {
  const [cookies] = useCookies([]);
  
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate("/");
    }
  }, [navigate]);

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
         await axios.post(
        "http://localhost:2882/auth/login",
        {
          ...values,
        },
        { withCredentials: true }
      ).then(response => {
        console.log("token")
        console.log(response.data.token)
        console.log("token")

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('isLoggedIn', true); 

          if (response.data.errors) {
            const { email, password } = response.data.errors;
            if (email) generateError(email);
            else if (password) generateError(password);
          } else {
            navigate("/");
          }

      })
      .catch(error => {
        console.error(error);
      });


     
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
   <div className="front body">
     <div className="container login-container">
      <h2>Login to your Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an account ?<Link to="/register"> Register </Link>
        </span>
      </form>
      <ToastContainer />
    </div>
   </div>
  );
}

export default Login;
