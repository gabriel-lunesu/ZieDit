import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function CreateEvent(){

    const [eventName, seteventName] = useState('');
    const [eventDesc, seteventDesc] = useState('');

    const navigate = useNavigate();

    const [leftPos, setLeftPos] = useState(0);



    const createEvent = () => {
        axios.post('http://127.0.0.1:5000/events', {
            eventName: eventName,
            eventDesc: eventDesc
            })
            .then(function (response) {
                console.log(response);
                navigate("/dashboard");
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 409) {
                    alert("event already exists");
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
                    <p className="lead fw-normal font-bold mb-5 me-3">Register Your Event</p>
                  </div>
                
                  <div className="form-outline mb-4">
                  <label className="form-label font-thin mr-5" htmlFor="form3Example3">Naam</label>
        
                    <input
                      type="text"
                      value={eventName}
                      onChange={(e) => seteventName(e.target.value)}
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="naam van het evenement" 
                    />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label font-thin mr-5" htmlFor="form3Example3">Beschrijving</label>
        
                    <input
                      type="text"
                      value={eventDesc}
                      onChange={(e) => seteventDesc(e.target.value)}
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Voer de beschrijving van het evenement in" 
                    />
                  </div>
    
                  <div className="text-center text-lg-start mt-4 pt-2">
                   
                    <button
                      type="button" 
                      onClick={createEvent}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  
                    >
                      Register Event
                    </button>
                    
                  </div>
              
                
                </form>
              
              </div>
        
            </div>
          );
        
    }
    
    