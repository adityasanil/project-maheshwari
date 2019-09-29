import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signUp";
import Navbar from "./components/navbar";
import Login from "./components/login";
import ForgotPassword from "./components/forgotPassword";
import SimpleCard from "./components/dashboard";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/dashboard" component={SimpleCard} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
