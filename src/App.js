import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Error from "./Error";
import Auth from "./Auth";

function App() {
  
  const executedRef=useRef(false);
  useEffect(()=>{
    if(executedRef.current){return};
    console.log("inside use Effect app")
    executedRef.current=true
  },[])

  return (

      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    
  );
}

export default App;
