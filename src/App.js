import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signUp";
import Navbar from "./components/navbar";
import Login from "./components/login";
import ForgotPassword from "./components/forgotPassword";
import Dashboard from "./components/dashboard";
import UserProfile from "./components/userProfile";
import Logout from "./components/logout";
import auth from "./services/authService";
import MyAccount from "./components/myAccount";
import Admin from "./components/adminPanel";
import SearchPage from "./components/searchPage";
import TestUser from "./components/testUser";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <Navbar user={user} />
        <div className="content">
          <Switch>
            <Route
              path="/adminPanel"
              render={props => {
                if (user === null) return <Redirect to="/login" />;
                return <Admin {...props} />;
              }}
            />
            <Route
              path="/searchUsers"
              render={props => {
                if (user === null) return <Redirect to="/login" />;
                return <SearchPage {...props} />;
              }}
            />
            <Route path="/users/:_id" component={TestUser} />
            <Route path="/myAccount" component={MyAccount} />
            <Route path="/userProfile" component={UserProfile} />
            <Route path="/login" component={Login} />
            <Route
              path="/dashboard"
              render={props => {
                if (user === null) return <Redirect to="/login" />;
                return <Dashboard {...props} />;
              }}
            />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
