import React, { Component } from "react";
import { AppBar, Grid } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1,
    width: "100%",
    bottom: 0,
    fontFamily: "Balthazar"
  },

  appBar: {
    backgroundColor: "black",
    padding: 0,
    fontFamily: "Balthazar"
  },

  paragraph: {
    paddingTop: "2px",
    textDecoration: "none",
    color: "white",
    padding: 0,
    fontFamily: "Jura"
  },

  linkedin: {
    color: "rgb(255, 81, 0)",
    textDecoration: "none"
  }
};

class Footer extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="relative" className={classes.appBar}>
          <Grid container justify="center" direction="row">
            <CodeIcon fontSize="large" className={classes.linkIcon} />
            <Typography className={classes.paragraph} variant="h6">
              Developed by
              <a
                className={classes.linkedin}
                href="https://www.linkedin.com/in/jigar98/"
              >
                Jigar
              </a>
              &
              <a
                className={classes.linkedin}
                href="https://www.linkedin.com/in/adityasanil/"
              >
                Sanil
              </a>
            </Typography>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
