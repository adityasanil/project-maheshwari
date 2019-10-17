import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, Grid, CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 220,
    marginLeft: "24px",
    width: "83%",
    height: "210px",
    marginTop: "40px",

    "@media only screen and (max-width: 600px)": {
      width: "85%",
      //margin: "5px",
      marginTop: "5px",
      marginLeft: "25px",
      height: "auto",
      marginBottom: "10px"
    }
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(1.0)"
  },
  title: {
    fontSize: 26,
    fontFamily: "Oleo Script",
    //fontWeight: '700',
    color: "rgb(255, 81, 0)",
    textAlign: "center",
    marginTop: "50px"
  },

  subtitle: {
    fontFamily: "Jura",
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "50px"
  },

  pos: {
    marginBottom: 12
  },

  media: {
    height: 220,
    paddingTop: "5px"
  }
};

class CardComponent extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Grid item lg={3} sm={6} md={4} xs={12}>
        <Card className={classes.card} elevation={4}>
          <CardActionArea>
            <CardContent>
              <Typography
                className={classes.title}
                variant="h5"
                component="h2"
                style={{ textAlign: "center", marginTop: "50px" }}
                gutterBottom
              >
                {this.props.industry}
              </Typography>
              <Typography
                className={classes.subtitle}
                style={{ textAlign: "center", marginTop: "20px" }}
                color="textSecondary"
                gutterBottom
              >
                {bull}User Count: {this.props.userCount}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(CardComponent);
