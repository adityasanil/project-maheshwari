import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CardComponent from "./common/industryCard";

class SearchCard extends Component {
  render() {
    return (
      <Grid container>
        <CardComponent industry="Accounting" />
        <CardComponent industry="Advertising" />
        <CardComponent industry="Banking" />
        <CardComponent industry="Chemicals" />
        <CardComponent industry="Cosmetics" />
        <CardComponent industry="Catering" />
        <CardComponent industry="Electronics" />
        <CardComponent industry="Engineering" />
        <CardComponent industry="Entertainment" />
        <CardComponent industry="Estate" />
        <CardComponent industry="Fashion" />
        <CardComponent industry="Finance" />
        <CardComponent industry="Government" />
        <CardComponent industry="Health" />
        <CardComponent industry="HR" />
        <CardComponent industry="Import/Export" />
        <CardComponent industry="Investment" />
        <CardComponent industry="IT" />
        <CardComponent industry="Legal" />
        <CardComponent industry="Tourism" />
        <CardComponent industry="Maketing" />
        <CardComponent industry="Medical" />
        <CardComponent industry="Pharmaceuticals" />
        <CardComponent industry="Photography" />
        <CardComponent industry="Politics" />
        <CardComponent industry="Printing" />
        <CardComponent industry="Stock" />
        <CardComponent industry="Wholesale" />
        <CardComponent industry="Others" />
      </Grid>
    );
  }
}

export default SearchCard;
