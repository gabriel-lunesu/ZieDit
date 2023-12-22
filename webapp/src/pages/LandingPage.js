import { useEffect, useState } from 'react';
 
import {Link} from 'react-router-dom';
 
export default function LandingPage() {

    const [leftPos, setLeftPos] = useState(0);

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
              
              <h1 className="text-2xl font-bold mb-4">Welkom op ZieDit website!</h1>
              
              <p className="mb-4">Login of Registreer uw account hier.</p>
              
              <div className="flex justify-center">
                <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Login</Link>
                <Link to="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</Link>
              </div>
              
            </div>
            
          </div>
        </div>
      );
    }