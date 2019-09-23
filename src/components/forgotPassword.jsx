import React from "react";
import { Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Joi from "joi-browser";
import brandLogo from "../assets/images/brandLogo.png";
import Form from "./common/form";

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
  returnToLogin: {
    textDecoration: "none",
    color: "rgb(255, 81, 0)"
  },
  buttonSize: {
    width: "100%",
    maxWidth: "400px"
  }
};

class ForgotPassword extends Form {
  state = {
    data: { email: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .label("Email Id")
  };

  doSubmit = () => {
    //Call server
    console.log("Submitted");
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <React.Fragment>
          <Box mb={4}>
            <div>
              <br />
              <img src={brandLogo} alt="logo" className={classes.image} />
            </div>
            <div className={classes.heading}>
              {this.renderParagraph("Reset Your Password")}
            </div>
          </Box>
          <Box>
            <div>
              {this.renderParagraph(
                "Please enter the email address associated with your account."
              )}
            </div>
          </Box>
          <Box mb={1}>
            <div>
              <form onSubmit={this.handleSubmit}>
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
                      <Link to="/login" className={classes.returnToLogin}>
                        {this.renderParagraph("Return to Sign In")}
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
                      {this.renderButton("SEND", "secondary", "contained")}
                    </Grid>
                  </div>
                </Box>
              </form>
            </div>
          </Box>
        </React.Fragment>
      </Grid>
    );
  }
}

export default withStyles(styles)(ForgotPassword);
