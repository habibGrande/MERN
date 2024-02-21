import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Detail from './components/Details';
import Update from './components/Update';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div class="App">
      <Routes>
        <Route element={<Main/>}path="/products/"/>
        <Route element={<Detail/>}path="/products/:id"/>
        <Route element={<Update/>} path="/products/:id/edit"/>
        
      </Routes>
    </div>
  );
}

export default App;
