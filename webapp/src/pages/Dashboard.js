import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';



export default function Dashboard(){

    const [eventName, seteventName] = useState('');

    const navigate = useNavigate();

    const [leftPos, setLeftPos] = useState(0);

    const [events, setEvents] = useState([]);


    useEffect(() => {
      axios.get('http://127.0.0.1:5000/events')
        .then(response => {
          setEvents(response.data);
        })
    }, [])

    


    
     
    useEffect(() => {
      setLeftPos(window.innerWidth / 2);
    }, []);

    const displayEvents = () => {
        return events.map(event => {
          return (
            <div className="italic hover:not-italic font-bold border-2" key={event.id}>
              <p className="">{event.eventName}</p>
              <p className="text-sm">{event.eventDesc}</p>
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
              </div>
          
            
            </form>
          
          </div>
    
        </div>
      );
    
}

