import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 295,
    margin: "15px",
    width: "220px",
    height: "210px",
    marginTop: "55px",
    background: "#abbaab",
    backgroundImage:
      "linear-gradient(to right top, #ff9671, #ff8a8b, #ff83ac, #ff85d2, #e48ff6)"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(1.0)"
  },
  title: {
    fontSize: 26,
    fontFamily: "Oleo Script",
    fontWeight: "500",
    color: "rgb(255, 81, 0)"
  },

  subtitle: {
    fontFamily: "Jura",
    fontSize: 16,
    fontWeight: "500",
    color: "black"
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
      <Grid item lg={3} xs={6}>
        <Card className={classes.card}>
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
          <CardActions>
            <Button size="small" color="inherit" variant="outlined">
              Open
            </Button>
          </CardActions>
          <br />
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(CardComponent);
