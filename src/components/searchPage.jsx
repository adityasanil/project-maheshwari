import React, { Component } from "react";
import SearchBox from "./searchBox";

class SearchPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Search page</h1>
        <SearchBox />
      </React.Fragment>
    );
  }
}

export default SearchPage;
