import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Order from "./Order";
import Payment from "./Payment";
import Thankyou from "./Thankyou";
import Welcome from "./Welcome";


import HomePage from "./pages/home";
function App() {
  return (
    // <HomePage />;
    <Router>
      <Switch>
       <Route exact path="/">
          <Welcome />
        </Route>
        <Route  path="/Homepage">
          <HomePage />
        </Route>
        <Route path="/Signup">
          <SignUp />
        </Route>
        <Route path="/Order">
          <Order />
        </Route>
        <Route path="/Payment">
          <Payment />
        </Route>
        <Route path="/Thankyou">
          <Thankyou />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
