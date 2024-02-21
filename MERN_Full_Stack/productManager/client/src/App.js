import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Detail from './components/Details';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div class="App">
      <Routes>
        <Route element={<Main/>}path="/products/"/>
        <Route element={<Detail/>}path="/products/:id"/>
      </Routes>
    </div>
  );
}

export default App;
