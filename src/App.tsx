import React from 'react';
import Login from './components/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Campaigns from './components/campaigns/Campaigns';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <BrowserRouter>
     <Navbar />
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/campaign" element={<Campaigns />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;