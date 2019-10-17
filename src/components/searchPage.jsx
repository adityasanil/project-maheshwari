import React, { Component } from "react";
import SearchBox from "./searchBox";
import ProfileCard from "./profileCard";
import http from "../services/httpService";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const style = {
  paperStyle: {
    width: "95%",
    height: "30px",
    margin: "25px",
    "@media only screen and (max-width: 600px)": {
      width: "82%",
      marginTop: "20px"
    }
  },
  textDecoration: {
    textDecoration: "none"
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

  //Do not delete this commented function

  // searchQuery = async query => {
  //   try {
  //     const { data } = await http.get("http://localhost:3001/search/" + query);
  //     const user = data.hits.hits;
  //     console.log(user);
  //     this.setState({ user });
  //   } catch (error) {}
  // };

  get renderUsers() {
    const { classes } = this.props;
    let message = (
      <p>Search users by their name, industry, company name etc.</p>
    );
    if (this.state.user.length !== 0) {
      return (
        <React.Fragment>
          {this.state.user.map(function(item, i) {
            return (
              <React.Fragment>
                <Link key={item._source._id} className={classes.textDecoration}>
                  <ProfileCard
                    className={classes.cardStyle}
                    firstName={item._source.firstName}
                    lastName={item._source.lastName}
                    companyName={item._source.companyName}
                    industry={item._source.industry}
                  />
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
    const { query: queryValue } = this.state;
    return (
      <React.Fragment>
        <br />
        <br />

        {/* <Paper className={classes.paperStyle}> */}
        <SearchBox onChange={this.handleChange} value={this.state.query} />
        <br />
        {this.renderUsers}
        {/* </Paper> */}

        {!queryValue && (
          <React.Fragment>
            <h1>Cards go in here</h1>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(style)(SearchPage);
