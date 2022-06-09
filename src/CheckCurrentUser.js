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

  export default CheckCurrentUser;