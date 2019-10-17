import React, { Component } from "react";
import { Grid, Box, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import homeImage from "../assets/images/image.png";
import { withStyles } from "@material-ui/core/styles";
import Footer from "./footer";

const styles = {
  root: {
    width: "90%",
    height: "auto",
    overflow: "scroll",
    marginTop: 40
  },

  welcome: {
    textAlign: "center",
    padding: "15px",
    fontFamily: "Jura",
    fontSize: "35px",
    marginTop: "130px",
    fontWeight: "600",
    "@media only screen and (max-width: 600px)": {
      marginTop: "5px",
      fontSize: "30px"
    }
    //color: "rgb(255, 81, 0)"
  },

  image: {
    width: "100%",
    //maxWidth: "550px",
    height: "auto",
    marginTop: 30,
    "@media only screen and (max-width: 600px)": {
      width: "98%"
    }
    // alignItems: 'center'
  },

  heading: {
    fontFamily: "Oleo Script",
    color: "rgb(255, 81, 0)"
  },

  paragraph: {
    fontFamily: "Balthazar",
    fontSize: "20px"
  },

  signUp: {
    textDecoration: "none",
    color: "rgb(255, 81, 0)",
    fontSize: "20px",
    fontFamily: "Balthazar"
  },

  paperBackground: {
    padding: "10px"
    //marginLeft: '50px',
    //marginRight: '50px'
  },

  paper: {
    padding: "30px"
  },

  tagline: {
    color: "rgb(255, 81, 0)",
    fontFamily: "Oleo Script",
    fontSize: "25px"
  },

  readMore: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Balthazar"
  }
};

class Home extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <Grid item xs={12} lg={6} sm={12}>
            <br />
            <img src={homeImage} alt="logo" className={classes.image} />
          </Grid>
          <Grid item xs={12} lg={6} sm={12}>
            <Box>
              <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
              >
                <Typography variant="h5" className={classes.welcome}>
                  Maheshwari B2B Connect Platform
                </Typography>
                <Typography variant="h6" className={classes.tagline}>
                  Tagline for the platform
                </Typography>
                <br />
                <Button variant="outlined">
                  <a href="#about" className={classes.readMore}>
                    Read more about us
                  </a>
                </Button>
                {/* <Typography variant="h6" className={classes.welcome}>Welcome to Maheshwari B2B Connect Platform {<br />}Tagline</Typography> */}
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Grid container className={classes.paper}>
          <Paper className={classes.paperBackground} id="about">
            <Box textAlign="center">
              <Typography variant="h5" className={classes.heading}>
                About us:
              </Typography>
              <br />
              <Typography
                variant="body1"
                align="justify"
                className={classes.paragraph}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis tristique neque quis rhoncus. Praesent efficitur velit
                sed suscipit maximus. In hac habitasse platea dictumst. Fusce
                sed egestas nibh. Sed at dolor quis ante blandit egestas.
                Maecenas blandit turpis leo, sed egestas velit malesuada quis.
                Aliquam a lorem ac felis rutrum aliquet. Vestibulum nec quam
                enim. Mauris ac ex arcu. Praesent vulputate pretium erat, eu
                vulputate nibh ornare vitae. Aenean sit amet mauris aliquam,
                euismod risus sit amet, sagittis ipsum. Quisque ultricies sed
                enim nec sodales. Proin vitae justo sed massa efficitur
                elementum nec vel risus. Vivamus in commodo nisi, pulvinar
                ultricies nulla.
              </Typography>
              <br />
              <Typography
                variant="body1"
                align="justify"
                className={classes.paragraph}
              >
                Quisque ut ante eget mi rutrum pharetra. Quisque aliquet at
                lectus quis varius. Praesent in leo ligula. Morbi vulputate
                ullamcorper auctor. Vivamus ut venenatis justo. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Vivamus condimentum mollis purus, ut condimentum massa
                mollis vestibulum. Vestibulum ac molestie massa. Nulla sit amet
                tincidunt eros. Pellentesque auctor, turpis nec malesuada
                elementum, sapien leo accumsan eros, a bibendum purus lorem nec
                eros. Phasellus egestas ullamcorper risus, non dapibus felis
                egestas ac. Integer interdum mollis viverra. Nunc id congue ex.
              </Typography>

              {/* <Box textAlign="center"> */}
              <div>
                <Link to="/signUp" className={classes.signUp}>
                  <Typography variant="body2" className={classes.paragraph}>
                    Want to be a member?
                  </Typography>
                </Link>
              </div>
              {/* </Box> */}
              <br />
            </Box>
          </Paper>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
