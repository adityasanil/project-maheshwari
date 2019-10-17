import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const style = {
  inputStyle: {
    width: "100%",
    height: "35px",
    padding: "15px 0px 20px 10px",
    fontSize: "25px",
    border: "solid #ffccbc",
    borderRadius: "6px"
  }
};

class SearchBox extends Component {
  render() {
    const { classes } = this.props;

    return (
      <input
        placeholder="Search..."
        value={this.props.value}
        onChange={this.props.onChange}
        className={classes.inputStyle}
      />
    );
  }
}

export default withStyles(style)(SearchBox);
