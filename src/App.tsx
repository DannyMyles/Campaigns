import React from "react";
import Login from "./components/login/Login";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Campaigns from "./components/campaigns/Campaigns";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />}></Route>
        <Route path="/campaign" element={<Campaigns />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
