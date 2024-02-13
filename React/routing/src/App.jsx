import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { useParams } from "react-router";
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
const Home = (props) => { 
  return (
    <h1 >Welcome</h1>
  );
}
const Number = (props) => { 
  const { number } = useParams(); 
  return (
    <>
  {
    isNaN(number) ? <h1>the Word is  { number }!</h1> :<h1>the number is  { number }!</h1>
  }
    </>
  );
}
const Hello = (props) => { 
  const { word } = useParams(); 
  const { color } = useParams(); 
  const { back } = useParams(); 
  return (
    <h1 style={{color: color, backgroundColor:back}}>the word is  { word }!</h1>
  );
}



function App() {
  const [count, setCount] = useState(0)


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