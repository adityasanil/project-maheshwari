import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const style = {
  inputStyle: {
    width: "99%",
    height: "50px",
    borderRadius: "12px",
    fontSize: "18px",
    border: "0px",
    outline: "none",
    paddingLeft: "15px",
    fontFamily: "Gill Sans, sans-serif",
    "@media only screen and (max-width: 600px)": {
      width: "90%",
      height: "38px"
    }
  },

  paperStyle: {
    width: "95%",
    marginLeft: "29px",
    height: "52px",
    borderRadius: "12px",

    "@media only screen and (max-width: 600px)": {
      width: "86%",
      marginLeft: "24px",
      height: "40px"
    }
  }
};

class SearchBox extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paperStyle} elevation={7}>
        <input
          placeholder="Search users by their name, industry, company name etc."
          value={this.props.value}
          onChange={this.props.onChange}
          className={classes.inputStyle}
        />
      </Paper>
    );
  }
}

export default withStyles(style)(SearchBox);
