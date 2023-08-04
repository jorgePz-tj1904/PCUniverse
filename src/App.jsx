import React from 'react';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Form from './pages/Form/From';
import Header from './pages/Home/Header';
import Productos from './pages/Productos/Productos';
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/componentes' element={<Productos/>} />
      </Routes>
    </div>
  );
}

export default App;
