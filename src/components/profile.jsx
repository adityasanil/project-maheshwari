import React, { Component } from "react";
import UserProfile from "./userProfile";
import { loggedInUser } from "../services/getUsers";

class Profile extends Component {
  state = {
    user: []
  };

  async componentDidMount() {
    try {
      const { data: user } = await loggedInUser();
      this.setState({ user });
    } catch (error) {}
  }
  render() {
    return <UserProfile user={this.state.user} />;
  }
}

export default Profile;
