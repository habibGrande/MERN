import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import io from 'socket.io-client';
import Chat from './components/Chat';

function App() {
  const[socket] = useState(()=>io(":8000"))
  const[message,setMessage] = useState("")

  useEffect(() => {
    console.log('Is this running?');
    socket.on('event', data => {
      console.log(data);
      setMessage(data);
    });
    
  }, [socket]);
  return (
    <>
    <Chat message={message}/>
    </>
  )
}

export default App
