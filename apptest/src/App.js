import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecondPage from './SecondPage';
import Signin from './signin';
import Login from './login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
