import React, { Component } from 'react'
import Header from '../Components/Header/Header'
import Filter from '../Components/Filter/Filter'

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Filter />
      </div>
    )
  }
}

