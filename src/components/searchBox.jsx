import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const style = {
  inputStyle: {
    width: "100%",
    height: "35px",
    padding: "2px",

    "@media only screen and (max-width: 600px)": {
      width: "100%",
      height: "30px",
      marginBottom: "30px"
    },

    fontSize: "20px"
  },

  paperStyle: {
    width: "95%",
    height: "30px",
    marginLeft: "25px",
    marginBottom: "10px",
    marginTop: "20px",

    "@media only screen and (max-width: 600px)": {
      width: "85%",
      marginLeft: "20px",
      height: "20px",
      marginBottom: "33px",
      marginTop: "6px"
    }
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
      <Paper className={classes.paperStyle}>
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
