import React from "react";
import { Grid } from "@material-ui/core";
import Form from "./common/form";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };
  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <React.Fragment>
          <div>
            <p>Welcome to our platform</p>
          </div>
          <form onChange={this.handleSubmit}>
            {this.renderInput("email", "Email Address", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Log in", "secondary", "contained")}
          </form>
        </React.Fragment>
      </Grid>
    );
  }
}

export default Login;
