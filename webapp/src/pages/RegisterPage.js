import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

 
export default function RegisterPage(){
 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   
    const navigate = useNavigate();
  
    const [leftPos, setLeftPos] = useState(0);

     

    // function to register user and post them to the database
    const registerUser = () => {
        axios.post('http://127.0.0.1:5000/signup', {
            email: email,
            password: password
        })
        .then(function (response) {
             console.log(response);
            navigate("/");
        })
        .catch(function (error) {
            console.log(error, 'error');
            if (error.response.status === 409) {
                alert("e-mail already exists");
            }
        });
        // you can make a alert here if credentials are invalid.
        
    };
     
    useEffect(() => {
      setLeftPos(window.innerWidth / 2);
    }, []);
  
     
  return (
    <div className="relative h-screen">
      
      <div style={{
        position: 'absolute',
        top: '50%',
        left: leftPos,
        transform: 'translate(-50%, -50%)'  
      }}>
      
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
          <div className="d-flex flex-row align-items-center  justify-content-center justify-content-lg-start">
            <p className="lead fw-normal font-bold mb-5 me-3">Register Your Account</p>
          </div>
        
          <div className="form-outline mb-4">
          <label className="form-label font-thin mr-5" htmlFor="form3Example3">Email address</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid email address" 
            />
          </div>
        
          <div className="form-outline mb-4">
          <label className="form-label font-thin mr-5" htmlFor="form3Example4">Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter password" 
            />
          </div>
        
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">Remember me</label>
            </div>
          </div>
        
          <div className="text-center text-lg-start mt-4 pt-2">
            <a 
              type="button" 
              className="bg-blue-500 hover:bg-blue-700 text-white mr-5 font-bold py-2 px-4 rounded"
              href="/login"
            >
              Login
            </a>
            <button
              type="button" 
              onClick={registerUser}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  
            >
              Register
            </button>
            
          </div>
        
        </form>
      
      </div>

    </div>
  );

}