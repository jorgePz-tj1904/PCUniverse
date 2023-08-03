import React from 'react';
import ReactDOM from 'react-dom'; // Corregido el import
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import  Store  from './redux/store.js';



ReactDOM.createRoot(document.getElementById('root')).render( // Usando createRoot
  <Provider store={Store}>
    <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </Provider>
);