import React from "react";
import { Redirect } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Joi from "joi-browser";
import brandLogo from "../assets/images/brandLogo.png";
import Form from "./common/form";
import auth from "../services/authService";

const styles = {
  image: {
    width: "100%",
    maxWidth: "250px",
    height: "auto"
  },
  heading: {
    fontSize: "30px"
  },
  inputSize: {
    width: "100%",
    maxWidth: "300px"
  },
  forgotPassword: {
    textDecoration: "none",
    color: "rgb(255, 81, 0)"
  },
  buttonSize: {
    width: "100%",
    maxWidth: "400px"
  }
};

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

  doSubmit = async () => {
    //Submit credentials to the server

    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);
      window.location = "/search";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.password = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    const { classes } = this.props;
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <React.Fragment>
          <div>
            <br />
            <img src={brandLogo} alt="logo" className={classes.image} />
          </div>
          <div className={classes.heading}>
            {this.renderParagraph("Welcome to our platform")}
          </div>
          <Box mb={1}>
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <Box mb={1}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <div className={classes.inputSize}>
                        {this.renderInput("email", "Email Address", "email")}
                      </div>
                      <div className={classes.inputSize}>
                        {this.renderInput("password", "Password", "password")}
                      </div>
                    </Grid>
                  </Box>
                  <Box mb={2}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <div>
                        <Link
                          to="/forgotPassword"
                          className={classes.forgotPassword}
                        >
                          {this.renderParagraph("Forgot Your Password?")}
                        </Link>
                      </div>
                    </Grid>
                  </Box>
                  <Box>
                    <div className={classes.buttonSize}>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        {this.renderButton("Log in", "secondary", "contained")}
                      </Grid>
                    </div>
                  </Box>
                </div>
              </form>
            </div>
          </Box>
        </React.Fragment>
      </Grid>
    );
  }
}

export default withStyles(styles)(Login);
