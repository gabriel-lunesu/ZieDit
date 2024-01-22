import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";


export default function Dashboard(){

    const [eventName, seteventName] = useState('');
<<<<<<< HEAD
    const [eventDate, seteventDate] = useState('');
    const [events, setEvents] = useState([]);

=======
>>>>>>> parent of 928b52c (V1 PROTOTYPE)

    const navigate = useNavigate();

    const [leftPos, setLeftPos] = useState(0);

    


    const createEvent = () => {
        axios.post('http://127.0.0.1:5000/events', {
            eventName: eventName,
            eventDate: eventDate // from some date picker
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

<<<<<<< HEAD
    const displayEvents = () => {
        return events.map(event => {
          return (
            <div className="italic hover:not-italic font-bold border-2" key={event.id}>
              <p className="">{event.eventName}</p>
              <p className="">{event.eventDate}</p>
            </div>
          )
        })
      }

=======
>>>>>>> parent of 928b52c (V1 PROTOTYPE)
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
              <label className="form-label font-thin mr-5" htmlFor="form3Example3">Event</label>
    
                <input
                  type="text"
                  value={eventName}
                  onChange={(e) => seteventName(e.target.value)}
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid event" 
                />
              </div>

              <div className="form-outline mb-4">
              <label className="form-label font-thin mr-5" htmlFor="form3Example3">Date</label>
    
                <input
                  type="Date"
                  value={eventDate}
                  onChange={(e) => seteventDate(e.target.value)}
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid event" 
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

