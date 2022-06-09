import React, { useEffect } from "react";
import './App.css';
// import CheckCurrentUser from './CheckCurrentUser';


let CurrentAuthenticatedUser = "";
let counter = 0;
let currentState;

// const checkLoginState = async () => {
//   counter += 1;
//   console.log('before the await function : '+ counter);
//   CurrentAuthenticatedUser = await CheckCurrentUser();
//   console.log("current authed user " + CurrentAuthenticatedUser);
//   console.log('after the await function : '+ counter);
//   if (CurrentAuthenticatedUser === true) {
//     // setLoginState(CurrentAuthenticatedUser);
//     console.log(
//       "loginstate has been set to value: " + CurrentAuthenticatedUser
//     );
//   }
// };

function App() {

  function CheckCurrentUser() {
    try {
        console.log("inside check current user document try block");
       fetch(`https://jsonplaceholder.typicode.com/posts`)
     .then((response) => console.log(response));
      return true;
    } catch (error) {
      console.log("no logged in user - inside catch block");
      return null;
    }
  }

  console.log("executing before");
  useEffect(()=>{
    CheckCurrentUser();

  },[])
  
  // currentState = 
  console.log("executing after");

  return (
<h1>Open Points</h1>
  );
}

export default App;
