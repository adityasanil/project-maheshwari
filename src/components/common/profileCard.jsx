import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { deepOrange } from "@material-ui/core/colors";

const styles = {
  card: {
    width: "100%",
    marginTop: "15px",
    marginLeft: "6px"
  },
  avatar: {
    margin: 10,
    width: 70,
    height: 70,
    backgroundColor: deepOrange[400]
  },
  two_chars: {
    fontFamily: "Lucida Console, Monaco, monospace",
    width: "1ch",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontSize: "25px"
  }
};

class CardComponent extends Component {
  state = {};
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card} elevation={12}>
        <CardActionArea>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <CardContent>
              <Avatar className={classes.avatar}>
                <span className={classes.two_chars}>
                  {this.props.firstName}
                </span>
                <p className={classes.two_chars}>{this.props.lastName}</p>
              </Avatar>
            </CardContent>
            <CardContent>
              <p>
                <h1>
                  {this.props.firstName} {this.props.lastName}
                </h1>
              </p>
              <p>
                Industry:
                <span style={{ fontWeight: "700" }}>{this.props.industry}</span>
              </p>
              <p>
                Company:
                <span style={{ fontWeight: "700" }}>
                  {this.props.companyName}
                </span>
              </p>
            </CardContent>
          </Grid>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(CardComponent);
