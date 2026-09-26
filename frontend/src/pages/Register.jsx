import React from 'react';
import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import {FaUser,FaLock} from 'react-icons/fa';
import {MdAlternateEmail,MdPlace} from "react-icons/md";
import './Register.css';


const Register= () => {
    const [UserModel, setUserModel] = useState({
        username: "",
        password: "",
        email: "",
        address: ""
    });

    const [error, setError] = useState(false);
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setUserModel((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try{
            const res=await axios.post("http://localhost:8800/Register", UserModel);
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
          <form onSubmit={handleClick}>
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" 
              placeholder='Username' 
              onChange={handleChange} required/>
              <FaUser className='icon' />
           
        </div>
          <div className="input-box">
            <input type="password" placeholder='Password' 
            onChange={handleChange} required/>
            <FaLock className='icon' />
            </div>

            
          <div className="input-box">
            <input type="email" placeholder='Email' 
            onChange={handleChange} required/>
            <MdAlternateEmail className='icon' />
            </div>

            <div className="input-box">
            <input type="address" placeholder='Address' 
            onChange={handleChange} required/>
            <MdPlace className='icon' />
            </div>
  
          
            <button type="submit">Submit</button>
            <div className="register-link">
            {error && <p>Something went wrong</p>}
             <p><Link to="/">Login</Link></p>
              </div>
          </form>
        </div>
    )
  };
      
      export default Register;
    