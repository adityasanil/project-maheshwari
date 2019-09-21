import React, { Component } from "react";
import RegistrationForm from "./components/registrationForm";
import { Grid } from "@material-ui/core";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={5}>
            <RegistrationForm />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
