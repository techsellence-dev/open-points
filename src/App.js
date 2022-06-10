import React from "react";
import "./App.css";
import Auth from "./Auth";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Error from "./Error";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
