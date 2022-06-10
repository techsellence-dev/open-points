import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import CheckCurrentUser from "./CheckCurrentUser";

let counter = 0;

function Auth() {
const currentUser = useRef(false)
let navigate = useNavigate();

useEffect(()=>{
  navigate("/Home", {replace : true})
  console.log('inside use effect')
    },
  [currentUser.current],
);


  async function checkLoginState() {
    currentUser.current = await CheckCurrentUser();
  }

  counter +=1
  checkLoginState();

  console.log(counter);

  return <h1>Open Points</h1>;
}

export default Auth;
