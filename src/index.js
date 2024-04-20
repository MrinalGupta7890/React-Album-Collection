// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App';

// Create a root element for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside a BrowserRouter and React.StrictMode
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
