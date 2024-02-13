import { useState } from 'react'
import './App.css'
import BoxGen from './component/boxGen';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  return (
    <>
      <h1>Box Generator</h1>
     
      <BoxGen addBox={addBox}/>
      <div style={{display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around'}}>
        {boxes.map((box, i) => (
          <div
            key={i}
            style={{
              backgroundColor: box,
              width: 50,
              height: 50,
              margin: 50,
              
            }}
          >

          </div>
        ))}
      </div>
    </>
  )
}

export default App
