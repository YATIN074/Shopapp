import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './redux/Store'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/react"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
    <Provider store={store}>
    <Toaster/><App />
    
    </Provider>
  </BrowserRouter>
);
