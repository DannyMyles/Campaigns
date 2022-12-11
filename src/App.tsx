import React from "react";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Campaigns from "./components/campaigns/Campaigns";
import { Popup } from "./components/popup/Popup";
// import Navbar from './components/navbar/Navbar';
// import { UserProvider } from './context/UserContext';
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
