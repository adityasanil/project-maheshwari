import React, { Component } from "react";
import UserProfile from "./userProfile";
import { getSearchedUser } from "../services/getUsers";

class Profile extends Component {
  state = {
    user: []
  };

  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      const { data: user } = await getSearchedUser(id);
      this.setState({ user });
    } catch (error) {}
  }

  render() {
    return <UserProfile user={this.state.user} />;
  }
}

export default Profile;
