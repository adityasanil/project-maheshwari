import React, { Component } from "react";
import SearchBox from "./searchBox";
import SearchCard from "./searchCard";

class SearchPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <SearchBox />
        <SearchCard />
        <br />
      </React.Fragment>
    );
  }
}

export default SearchPage;
