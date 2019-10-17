import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CardComponent from "./common/profileCard";

class ProfileCard extends Component {
  render() {
    return (
      <Grid container>
        <CardComponent
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          companyName={this.props.companyName}
          industry={this.props.industry}
        />
      </Grid>
    );
  }
}

export default ProfileCard;
