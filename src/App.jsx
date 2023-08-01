import React from 'react';
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import Form from './pages/From/From';
import {Routes, Route } from 'react-router-dom';
import './App.css'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={Home}/>
        <Route path='/arma-tu-pc' element={Detail}/>
        <Route path='/detail' element={Form}/>
      </Routes>
    </div>
  )
}

export default App
