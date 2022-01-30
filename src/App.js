import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route 
      path="/" 
      element={<NavBar/>}/>
    </Routes>
    </BrowserRouter>
  );
}

