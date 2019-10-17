import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CardComponent from "./common/industryCard";

class SearchCard extends Component {
  render() {
    return (
      <Grid container>
        <CardComponent industry="Accounts" userCount="4" />
        <CardComponent industry="Apparel & Fashion" userCount="1" />
        <CardComponent industry="Banking" userCount="5" />
        <CardComponent industry="Chemicals" userCount="2" />
        <CardComponent industry="Computer Hardware" userCount="8" />
        <CardComponent industry="Cosmetics" userCount="3" />
        <CardComponent industry="Engineering" userCount="11" />
        <CardComponent industry="Entertainment" userCount="2" />
        <CardComponent industry="Finance" userCount="7" />
        <CardComponent industry="Food & Beverages" userCount="4" />
        <CardComponent industry="Health Care" userCount="2" />
        <CardComponent industry="Human Resources" userCount="8" />
        <CardComponent industry="Import & Export" userCount="16" />
        <CardComponent industry="Investment Banking" userCount="6" />
        <CardComponent industry="Legal Services" userCount="3" />
        <CardComponent industry="Leisure, Travel & Tourism" userCount="10" />
        <CardComponent industry="Maketing & Advertising" userCount="14" />
        <CardComponent industry="Pharmaceuticals" userCount="3" />
        <CardComponent industry="Photography" userCount="6" />
        <CardComponent industry="Printing" userCount="12" />
        <CardComponent
          industry="Professional Training & Coaching"
          userCount="8"
        />
        <CardComponent industry="Real Estate" userCount="13" />
        <CardComponent industry="Textiles" userCount="5" />
        <CardComponent industry="Wholesale" userCount="16" />
        <CardComponent industry="Others" userCount="26" />
      </Grid>
    );
  }
}

export default SearchCard;
