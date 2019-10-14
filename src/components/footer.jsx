import React, { Component } from "react";
import { AppBar, Grid } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
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

  heading: {
    title: {
      textAlign: "center"
    },

    flexGrow: 1,
    textAlign: "center"
  },

  paragraph: {
    paddingTop: "2px",
    textDecoration: "none",
    //fontSize: "25px"
    color: "white",
    padding: 0,
    fontFamily: "Jura"
  },

  linkedin: {
    color: "rgb(255, 81, 0)",
    textDecoration: "none"
  },

  greenAvatar: {
    //margin: 10,
    color: "#fff",
    backgroundColor: "green"
  },

  email: {
    textDecoration: "none",
    color: "white",
    fontFamily: "Jura"
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
            {/* <Grid container justify="center" direction="row">
              <Grid item xs={12} lg={9}>
                <ListItem className={classes.listLeft}>
                  <ListItemAvatar>
                    <Avatar className={classes.greenAvatar}>
                      <PhoneIphoneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    secondary={
                      <Typography
                        style={{ color: "white", fontFamily: "Jura" }}
                      >
                        +91 8169848105{<br />}
                        +91 8779888847
                      </Typography>
                    }
                    //secondary="+91 8779888847/ +91 0123456789"
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} lg={3}>
                <ListItem
                  className={classes.listRight}
                  style={{ alignItems: "center", justify: "center" }}
                >
                  <ListItemAvatar>
                    <Avatar className={classes.greenAvatar}>
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    // primary={<Typography style={{color:'rgb(255, 81, 0)'}}>Email:</Typography>}
                    secondary={
                      <Typography
                        className={classes.email}
                        style={{ color: "white" }}
                      >
                        <a
                          className={classes.email}
                          href="mailto: aditya.sanil24@gmail.com"
                        >
                          aditya.sanil24@gmail.com
                        </a>
                        {<br />}
                        <a
                          className={classes.email}
                          href="mailto: jigar1198@gmail.com"
                        >
                          jigar1198@gmail.com
                        </a>
                      </Typography>
                    }
                  />
                </ListItem>
              </Grid>
            </Grid> */}
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
