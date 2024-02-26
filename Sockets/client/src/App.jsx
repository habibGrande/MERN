import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';
import Chat from './views/Chat';
import Header from './components/Header';
import GetStartChatting from './views/GetStartChatting';

function App() {

  const [socket] = useState( () => io.connect("http://localhost:8000"));
  const [isThereUser, setIsThereUser] = useState(false);

  useEffect( () => {
    const user = localStorage.getItem("userName");
    if(user !== null){
      setIsThereUser(true);
    }
  }, []);
  const handleGetStarting = userName => {
    localStorage.setItem("userName", userName);
    setIsThereUser(true);
  }

  const handleCloseChat = () => {
    setIsThereUser(false);
  }


  return (
    <>
      <Header />
      {
        isThereUser ?
        <Chat socket={ socket } handleCloseChat={ handleCloseChat } /> :
        <GetStartChatting socket={ socket } handleGetStarting={ handleGetStarting } />
      }
      
    </>
  )
}

export default App