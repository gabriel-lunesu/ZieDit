import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';



export default function Dashboard(){



    const [leftPos, setLeftPos] = useState(0);

    const [events, setEvents] = useState([]);


    // get all events

    useEffect(() => {
      axios.get('http://127.0.0.1:5000/events')
        .then(response => {
          setEvents(response.data);
        })
    }, [])


    

    


    
     
    useEffect(() => {
      setLeftPos(window.innerWidth / 2);
    }, []);


    // function to display events in front-end
    const displayEvents = () => {
        return events.map(event => {
          return (
            <div className="italic hover:not-italic font-bold border-2" key={event.id}>
              {events.map(event => (
                <Link 
                  key={event.id}
                  to={`/events/${event.id}`}  
                >
                  <h2>{event.eventName}</h2>
                  <p>{event.eventDesc}</p>
                  <p>{event.eventDate}</p> 

                </Link>
              ))}

            </div>
          
          )
        })
      }

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
                <p className="lead fw-normal font-bold mb-5 me-3">Bekijk hier alle evenementen.</p>
              </div>

                <div className="events text-center text-lg-start mt-4">
                  {displayEvents()}
                </div>
              <div className="flex justify-center">
                <Link to="/createevent" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mt-10">Evenement aanmaken </Link>
                <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">Terug naar startpagina</Link>
                <Link to="/userprofile" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded ml-4">Naar mijn profiel</Link>

              </div>
          
            
            </form>
          
          </div>
    
        </div>
      );
    
}

