import React, { useRef } from "react";
import "./App.css";
import CheckCurrentUser from "./CheckCurrentUser";

let currentState;

function Auth() {
  const CurrentAuthenticatedUser = useRef(undefined);
  const loading = useRef(false);

  async function checkLoginState() {
    if (!CurrentAuthenticatedUser.current) {
      CurrentAuthenticatedUser.current = await CheckCurrentUser();
    }
  }
  currentState = checkLoginState();

  return <h1>Open Points</h1>;
}

export default Auth;
