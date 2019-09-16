import React, { Component } from "react";
import RegistrationForm from "./components/registrationForm";
import {Grid} from '@material-ui/core';



class App extends Component {
  render() {
    return (
      //<React.Fragment>
      <Grid
  container 
  spacing={0}
  //direction="column"
  alignItems="center"
  justify="center"
  //style={{ minHeight: '100vh' }}
>

  <Grid item xs={5}>
    <RegistrationForm />
  </Grid>   

</Grid> 
        //<RegistrationForm />
      //</React.Fragment>
    );
  }
}

export default App;
