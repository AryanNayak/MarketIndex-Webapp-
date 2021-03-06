import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../Signin.js";
import SignUp from "../Signup.js";
import ForgotPassword from "../ForgotPassword.js";
import Dashboard from "../Dashboard.js";
import { HashRouter, Link } from "react-router-dom";
import {render} from 'react-dom';


function MainRoutes() {
  return (
    <Router >
      <Switch>
        <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
        <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/" exact component={Dashboard} />
      </Switch>
    </Router>


  );
}

export default MainRoutes;
