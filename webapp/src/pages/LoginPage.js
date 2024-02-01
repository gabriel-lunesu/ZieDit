import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

 
export default function LoginPage(){
 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   
    const navigate = useNavigate();

    const [leftPos, setLeftPos] = useState(0);

  //  function to log in users and catch wrong inputs
     
    const logInUser = () => {
        if(email.length === 0){
          alert("Email has left Blank!");
        }
        else if(password.length === 0){
          alert("password has left Blank!");
        }
        else{
            axios.post('http://127.0.0.1:5000/login', {
                email: email,
                password: password
            })
            .then(function (response) {
                console.log(response);
                //console.log(response.data);
                navigate("/dashboard");
            })
            // if the pass or email is wrong user gets this error
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid credentials");
                }
            });
        }
    }
 
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
        
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-5 font-bold me-3">Log Into Your Account</p>
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
        
          <div className="form-outline mb-3">
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
            <button 
              type="button" 
              className="bg-blue-500 hover:bg-blue-700 text-white mr-5 font-bold py-2 px-4 rounded"
              onClick={logInUser}
            >
              Login
            </button>
            <a 
              type="button" 
              href="/register"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  
            >
              Register
            </a>
            
          </div>
        
        </form>
      
      </div>

    </div>
  );

}