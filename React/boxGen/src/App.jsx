import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoxGen from './component/BoxGen';
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
              backgroundColor: box.color,
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
