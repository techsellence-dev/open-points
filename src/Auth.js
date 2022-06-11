import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import CheckCurrentUser from "./CheckCurrentUser";

let counter = 0;

function Auth() {
  const executedRef=useRef(false);
const currentUser = useRef(false)
let navigate = useNavigate();

useEffect(()=>{
  if(executedRef.current){return};
  navigate("/Home", {replace : true})
  console.log('inside use effect auth')
  currentUser.current = CheckCurrentUser();
  executedRef.current=true
    },
  [],
);


  async function checkLoginState() {
    
  }

  counter +=1
  checkLoginState();

  console.log(counter);

  return <h1>Open Points</h1>;
}

export default Auth;
