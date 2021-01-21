import React, { Component } from "react";
import Header from "../Components/Header/Header";
import NewsFeed from "./NewsFeed/NewsFeed";

import "bootstrap/dist/css/bootstrap.min.css";
import FilterContext from "../context/FilterContext";

export default class App extends Component {

  state ={
    filter: 'Top Stories',
    setFilter: this.updateFilter
  }

  updateFilter = (newFilter) =>{
    this.setState({...this.state, filter: newFilter});
  }



  render() {
    return (
      <div>
        <FilterContext.Provider value={{filter: this.state.filter, setFilter: this.updateFilter}}>
          <Header />
          <NewsFeed />
        </FilterContext.Provider>
      </div>
    );
  }
}
