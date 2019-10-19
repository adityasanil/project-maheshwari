import React, { Component } from "react";
import { getIndustryUsersList } from "../services/getUsers";

class IndustryUserList extends Component {
  state = {
    usersList: []
  };

  async componentDidMount() {
    try {
      const industryName = this.props.match.params.industryName;
      // .toString()
      // .toLowerCase();
      console.log(industryName);
      const { data: usersList } = await getIndustryUsersList(industryName);
      console.log(usersList);
      this.setState({ usersList });
    } catch (error) {}
  }
  render() {
    const { usersList } = this.state;
    const { industryName } = this.props.match.params;
    return (
      <React.Fragment>
        <h1>Welcome to {industryName} Page!</h1>
        <h4>Total number of users available: {usersList.length}</h4>
      </React.Fragment>
    );
  }
}

export default IndustryUserList;
