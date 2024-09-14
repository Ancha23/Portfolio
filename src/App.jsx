// src/App.jsx
import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AllRoutes } from './routes';

export const App = () => {
  return (
    <Router>
      <div className='bg-black min-h-screen'>
        <AllRoutes />
      </div>
    </Router>
  );
};


