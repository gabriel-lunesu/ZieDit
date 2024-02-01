import { useEffect, useState } from 'react';
 
import {Link} from 'react-router-dom';


import axios from 'axios';


export default function UserProfile() {



    const [leftPos, setLeftPos] = useState(0);

    const [events, setEvents] = useState([]);


    // function to display events in front-end

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
              {events.map(event => (
                <Link 
                  key={event.id}
                  to={`/events/${event.id}`}  
                >
                  <h2>{event.eventName}</h2>
                  <p>{event.eventDesc}</p>
                  <p>{event.eventDate}</p> 
                  <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mt-10">Verwijderen</button>

                </Link>
              ))}

            </div>
          
          )
        })
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
            
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
              
              <h1 className="text-2xl font-bold mb-4">Welkom op jou profiel!</h1>
              
              <p className="mb-4">check uw aanmeldingen hier.</p>

              <div className="events text-center text-lg-start mt-4">
                {displayEvents()}
              </div>
              
              <div className="flex justify-center">
                <Link to="/dashboard" className="bg-blue-500 hover:bg-blue-700 mt-10 text-white font-bold py-2 px-4 rounded mr-4">Terug naar alle evenementen</Link>
              </div>
              
            </div>
            
          </div>
        </div>
      );
    
}