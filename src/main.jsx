import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <BrowserRouter>
      <React.StrictMode>
        <Auth0Provider
          domain="dev-s48x33wnlzxvxpd5.us.auth0.com"
          clientId="4ckavR8gWL16JoYygEPxyYoU7UXN9Sf6"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}>
          
          <App />
        </Auth0Provider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
