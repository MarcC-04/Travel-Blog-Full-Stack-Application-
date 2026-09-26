import React from 'react';
import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import {FaUser,FaLock} from 'react-icons/fa';
import './Login.css';


const Login= () => {
    const [UserModel, setUserModel] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState(false);
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setUserModel((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const res=await axios.post("http://localhost:8800/", UserModel);
            console.log(res.data);
            navigate("/HomePage")
        }
        catch(err){
            console.log(err);
            setError(true);
        }
    };


    return (

        <div className='wrapper'>
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" 
              placeholder='Username' required/>
              <FaUser className='icon' />
           
        </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required/>
            <FaLock className='icon' />
            </div>
  
          
            <button type="submit">Submit</button>
            <div className="register-link">
             <p><Link to="/Register">Register</Link></p>
              </div>
          </form>
        </div>
    )
  };
      
      export default Login;
    