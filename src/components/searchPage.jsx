import React, { Component } from "react";
import SearchBox from "./searchBox";
import ProfileCard from "./profileCard";
import http from "../services/httpService";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import IndusrtyCard from "./searchPageIndustryCard";

const style = {
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
    if (this.state.user.length !== 0) {
      return (
        <React.Fragment>
          {this.state.user.map(function(item, i) {
            return (
              <React.Fragment>
                <Link
                  key={item._source._id}
                  className={classes.textDecoration}
                  to={`/users/profile/${item._id}`}
                >
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
    return null;
  }

  render() {
    const { query: queryValue } = this.state;
    return (
      <React.Fragment>
        <br />
        <br />
        <SearchBox onChange={this.handleChange} value={this.state.query} />
        <br />

        {this.renderUsers}

        {!queryValue && (
          <React.Fragment>
            <IndusrtyCard />
            <br />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(style)(SearchPage);
