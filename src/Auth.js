import React, { useState, useRef } from "react";
import './App.css';
import CheckCurrentUser from './CheckCurrentUser';



let counter = 0;
let currentState;



function Auth() {
  const [loginState, setLoginState] = useState(false);
  const CurrentAuthenticatedUser=useRef(undefined);
  const loading=useRef(false)

   async function checkLoginState() {
    if(!loading.current){
      console.log(loading.current);
      loading.current = true;
      console.log(loading.current);
    counter += 1;
    console.log('before the await function : '+ counter);
      if(!CurrentAuthenticatedUser.current){
          console.log("counter value inside the if is :" + counter);
          console.log("current authenticated user is :" + CurrentAuthenticatedUser.current);
          CurrentAuthenticatedUser.current = await CheckCurrentUser();
          console.log(loading.current);
          setLoginState(CurrentAuthenticatedUser.current);
          loading.current = false;
      }
    }
    console.log('after the await function : '+ counter);
  };

  function loadingCheckLoginState(){
    
    checkLoginState()
    loading.current=true
  }

  console.log("executing before");
  currentState = loading.current ? console.log("loading is on"):loadingCheckLoginState();
  console.log("executing after");

  return (
<h1>Open Points</h1>
  );
}

export default Auth;
