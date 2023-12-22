import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const events = [
        { id: 1, title: 'Event 1', description: 'Lorem ipsum dolor sit amet' },
        { id: 2, title: 'Event 2', description: 'Consectetur adipiscing elit' },
        { id: 3, title: 'Event 3', description: 'Sed do eiusmod tempor incididunt' },
        // Add more events here
    ];

    const [leftPos, setLeftPos] = useState(0);


    useEffect(() => {
        setLeftPos(window.innerWidth / 2);
      }, []);

    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: leftPos,
            transform: 'translate(-50%, -50%)'  
          }}>
          
        <div className="dashboard bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="font-bold text-xl animation-bounce">Event Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event.id}>
                            <td>{event.id}</td>
                            <td>{event.title}</td>
                            <td>{event.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Dashboard;
