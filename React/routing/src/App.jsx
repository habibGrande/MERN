import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { useParams } from "react-router";
import {
  Routes,
  Route
  
} from "react-router-dom";
const Home = () => { 
  return (
    <h1 >Welcome</h1>
  );
}

const Number = () => { 
  const { number } = useParams(); 
  return (
    <>
  {
    isNaN(number) ? <h1>the Word is  { number }!</h1> :<h1>the number is  { number }!</h1>
  }
    </>
  );
}

const Hello = () => { 
  const { word, color, back } = useParams(); 
 
  return (
    <h1 style={{color: color, backgroundColor:back}}>the word is  { word }!</h1>
  );
}

function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:number" element={< Number />} />
        <Route path="/:word/:color/:back" element={< Hello />} />
      </Routes>
    </>
  )
}

export default App