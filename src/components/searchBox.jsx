import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const style = {
  inputStyle: {
    width: "100%",
    height: "50px"
  }
};

class SearchBox extends Component {
  state = {
    query: ""
  };

  handleChange = e => {
    const query = e.target.value;
    this.setState({ query });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.inputStyle}>
        <input
          placeholder="Search"
          value={this.state.query}
          onChange={this.handleChange}
          className={classes.inputStyle}
        />
      </Paper>
    );
  }
}

export default withStyles(style)(SearchBox);
