import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, Grid, CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 220,
    marginLeft: "24px",
    width: "85%",
    height: "135px",
    marginTop: "22px",

    "@media only screen and (max-width: 600px)": {
      width: "85%",
      marginTop: "15px",
      marginLeft: "25px",
      height: "auto",
      marginBottom: "10px"
    }
  },
  title: {
    fontSize: 26,
    fontFamily: "Oleo Script",
    color: "rgb(255, 81, 0)",
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "40px"
  }

  // subtitle: {
  //   fontFamily: "Jura",
  //   fontSize: 16,
  //   fontWeight: "500",
  //   color: "black",
  //   textAlign: "center",
  //   marginTop: "20px",
  //   marginBottom: "50px"
  // },
};

class CardComponent extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Grid item lg={3} sm={6} md={4} xs={12}>
        <Card className={classes.card} elevation={5}>
          <CardActionArea>
            <CardContent>
              <Typography
                className={classes.title}
                variant="h5"
                component="h2"
                gutterBottom
              >
                {this.props.industry}
              </Typography>
              {/* <Typography
                className={classes.subtitle}
                style={{ textAlign: "center", marginTop: "20px" }}
                color="textSecondary"
                gutterBottom
              >
                {bull}User Count: {this.props.userCount}
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(CardComponent);
