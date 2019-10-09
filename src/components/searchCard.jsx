import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CardComponent from "./common/card";

class SearchCard extends Component {
  render() {
    return (
      <Grid>
        <CardComponent industry="Accounts" userCount="2" />
      </Grid>
    );
  }
}

export default SearchCard;
