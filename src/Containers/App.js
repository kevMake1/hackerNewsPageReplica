import React, { Component } from 'react'
import Header from '../Components/Header/Header'
import Filter from '../Components/Filter/Filter'
import NewsFeed from './NewsFeed/NewsFeed'


import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Filter />
        <NewsFeed />

      </div>
    )
  }
}

