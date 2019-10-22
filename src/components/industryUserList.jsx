import React, { Component } from "react";
import { getIndustryUsersList } from "../services/getUsers";
import ProfileCard from "./profileCard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const style = {
  textDecoration: {
    textDecoration: "none"
  }
};

class IndustryUserList extends Component {
  state = {
    usersList: []
  };

  async componentDidMount() {
    try {
      const industryName = this.props.match.params.industryName;
      // .toString()
      // .toLowerCase();
      // console.log(industryName);
      const { data: usersList } = await getIndustryUsersList(industryName);
      // console.log(usersList);
      this.setState({ usersList });
    } catch (error) {}
  }
  render() {
    const { usersList } = this.state;
    const { industryName } = this.props.match.params;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <h1>Welcome to {industryName} Page!</h1>
        <h4>Total number of users available: {usersList.length}</h4>
        <React.Fragment>
          {this.state.usersList.map(function(item, i) {
            return (
              <React.Fragment>
                <Link
                  key={item._id}
                  className={classes.textDecoration}
                  to={`/users/profile/${item._id}`}
                >
                  <ProfileCard
                    key={item._id}
                    className={classes.cardStyle}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    companyName={item.companyName}
                    industry={item.industry}
                  />
                </Link>
              </React.Fragment>
            );
          })}
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default withStyles(style)(IndustryUserList);
