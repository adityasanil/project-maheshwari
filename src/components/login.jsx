import React from "react";
import { Grid } from "@material-ui/core";
import Form from "./common/form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .label("Email Id"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    //Call server
    console.log("Submitted");
  };

  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <React.Fragment>
          <div>{this.renderParagraph("Welcome to our platform.")}</div>

          <form onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email Address", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Log in", "secondary", "contained")}
          </form>
          <div>
            <Link to="/forgotPassword">
              {this.renderParagraph("Forgot Your Password?")}
            </Link>
          </div>
        </React.Fragment>
      </Grid>
    );
  }
}

export default Login;
