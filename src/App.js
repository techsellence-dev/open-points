import './App.css';
import CheckCurrentUser from './CheckCurrentUser';

let CurrentAuthenticatedUser = "";
let counter = 0;
let currentState;

const checkLoginState = async () => {
  counter += 1;
  console.log('before the await function : '+ counter);
  CurrentAuthenticatedUser = await CheckCurrentUser();
  console.log("current authed user " + CurrentAuthenticatedUser);
  console.log('after the await function : '+ counter);
  if (CurrentAuthenticatedUser === true) {
    // setLoginState(CurrentAuthenticatedUser);
    console.log(
      "loginstate has been set to value: " + CurrentAuthenticatedUser
    );
  }
};

function App() {
  console.log("executing before");
  currentState = checkLoginState();
  console.log("executing after");

  return (
<h1>Open Points</h1>
  );
}

export default App;
