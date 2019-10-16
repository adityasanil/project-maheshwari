import React, { Component } from "react";
import SearchBox from "./searchBox";
import SearchCard from "./searchCard";
import http from "../services/httpService";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const style = {
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

class SearchPage extends Component {
  state = {
    query: "",
    user: []
  };

  handleChange = e => {
    const query = e.target.value;
    this.searchQuery(query);
    this.setState({ query });
  };

  searchQuery = async query => {
    try {
      console.log(query);
      const { data } = await http.get(
        "http://localhost:9200/personaldetailss/_search?q=" + query + "&pretty"
      );
      const user = data.hits.hits;
      this.setState({ user });
    } catch (error) {}
  };

  get renderUsers() {
    let message = (
      <p>Search users by their name, industry, company name etc.</p>
    );
    if (this.state.user.length !== 0) {
      return (
        <React.Fragment>
          {this.state.user.map(function(item, i) {
            return (
              <React.Fragment>
                <Link key={item._source._id}>
                  <p>
                    {item._source.firstName} {item._source.lastName}
                  </p>
                </Link>
              </React.Fragment>
            );
          })}
        </React.Fragment>
      );
    }

    return message;
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <br />
        <br />
        <Paper className={classes.paperStyle}>
          <SearchBox onChange={this.handleChange} value={this.state.query} />{" "}
          <button>Search</button>
          <br />
          {this.renderUsers}
        </Paper>
        {/* <SearchCard /> */}
      </React.Fragment>
    );
  }
}

export default withStyles(style)(SearchPage);
