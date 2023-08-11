import React from 'react';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Form from './pages/Form/From';
import Header from './pages/Home/Header';
import Ayuda from './components/Ayuda/Ayuda';
import Productos from './pages/Productos/Productos';
import Builds from './pages/pcFinals/Builds';
import Contacto from './pages/Contacto/Contacto';
// import Nosotros from './pages/Nosotros/Nosotros';
import Carrito from './components/Carrito/Carrito'
import { Routes, Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/componentes/:id' element={<Detail/>} />
        <Route path='/componentes' element={<Productos/>} />
        <Route path='/ayuda' element={<Ayuda/>} />
        <Route path='/pcs' element={<Builds/>}/>
        <Route path='/contactanos' element={<Contacto/>} />
        <Route path='/carrito' element={<Carrito/>} />
      </Routes>
    </div>
  );
}

export default App;
