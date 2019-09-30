import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signUp";
import Navbar from "./components/navbar";
import Login from "./components/login";
import ForgotPassword from "./components/forgotPassword";
import SimpleCard from "./components/dashboard";
import UserProfile from "./components/userProfile";
import Logout from "./components/logout";
import auth from "./services/authService";
import MyAccount from "./components/myAccount";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar user={this.state.user} />
        <div className="content">
          <Switch>
            <Route path="/myAccount" component={MyAccount} />
            <Route path="/userProfile" component={UserProfile} />
            <Route path="/dashboard" component={SimpleCard} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/logout" component={Logout} />
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
