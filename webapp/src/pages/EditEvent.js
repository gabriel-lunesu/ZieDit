// EditEvent.js

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditEvent() {
  
  const [leftPos, setLeftPos] = useState(0);
  
  
  const [eventName, setEventName] = useState('');
  const [eventDesc, setEventDesc] = useState(''); 
  const [eventDate, setEventDate] = useState('');
  
  
  
  const {id} = useParams();
  const navigate = useNavigate();
  

  // function to get all events out of database
  useEffect(() => {
    const fetchEvent = async () => {
      console.log(id);
      const response = await axios.get(`http://127.0.0.1:5000/events/${id}`);
      console.log(response.data);
      
      setEventName(response.data.eventName);
      setEventDesc(response.data.eventDesc);
      setEventDate(response.data.eventDate);
    }

    fetchEvent();
  }, [id]);


  // function to delete events
  
  const deleteEvent = async () => {
      console.log(id);
      axios.delete(`http://127.0.0.1:5000/events/${id}`);
      navigate("/dashboard");
    }

 

//  function to save events to the database
  const handleSave = async () => {
    await axios.put(`http://127.0.0.1:5000/events/${id}`, {
      eventName,
      eventDesc,
      eventDate
    })
    .then 
      navigate("/dashboard")

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
        <input 
            className='border-2 border-gray-300 p-2 w-full'
            value={eventName}
            onChange={e => setEventName(e.target.value)}
        />
        <input
          className='border-2 border-gray-300 p-2 w-full'
            value={eventDesc}
            onChange={e => setEventDesc(e.target.value)}
        />  
        <input
            className='border-2 border-gray-300 p-2 w-full'
            value={eventDate}
            onChange={e => setEventDate(e.target.value)}
        />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleSave}>Opslaan</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={deleteEvent}>Verwijderen</button>
        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5 mr-4 mt-10">Aanmelden</button>
        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 ml-5 mt-10">Terug naar alle evenementen</button>

        <p>aantal deelnemers: 13</p>
        </form>
        </div>
    
    </div>
  );
}
