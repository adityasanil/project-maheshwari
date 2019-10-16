import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const styles = {
  card: {
    width: "100%",
    marginTop: "10px",
    marginLeft: "6px"
  }
};

class CardComponent extends Component {
  state = {};
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card} elevation={4}>
        <CardActionArea>
          <CardContent>
            <p>
              <h1>
                {this.props.firstName} {this.props.lastName}
              </h1>
            </p>
            <p>
              Industry:
              <span style={{ fontWeight: "700" }}> {this.props.industry}</span>
            </p>
            <p>
              Company:
              <span style={{ fontWeight: "700" }}>
                {this.props.companyName}
              </span>
            </p>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(CardComponent);
