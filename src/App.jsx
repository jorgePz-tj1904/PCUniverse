import React from 'react';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Form from './pages/Form/From';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/detail' element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
