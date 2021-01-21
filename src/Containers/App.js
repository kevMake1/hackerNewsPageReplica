import React, { Component } from "react";
import Header from "../Components/Header/Header";
import NewsFeed from "./NewsFeed/NewsFeed";

import "bootstrap/dist/css/bootstrap.min.css";
import FilterContext from "../context/FilterContext";
import SearchContext from "../context/SearchContext";
import Favorite from "../Components/Favorite/Favorite";

export default class App extends Component {
  state = {
    filter: "Top Stories",
    setFilter: this.updateFilter,
    searchValue: "",
    setSearchValue: this.updateSearchValue,
  };

  updateFilter = (newFilter) => {
    this.setState({ ...this.state, filter: newFilter });
  };

  updateSearchValue = (newValue) => {
    this.setState({ ...this.state, searchValue: newValue });
  };

  render() {
    return (
      <div>
        <Favorite />
        <FilterContext.Provider
          value={{ filter: this.state.filter, setFilter: this.updateFilter }}
        >
          <SearchContext.Provider
            value={{
              searchValue: this.state.searchValue,
              setSearchValue: this.updateSearchValue,
            }}
          >
            <Header />
            <NewsFeed />
          </SearchContext.Provider>
        </FilterContext.Provider>
      </div>
    );
  }
}
