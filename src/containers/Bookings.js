import React, { Component } from 'react';
import Search from '../components/Search.js';
// import Results from '../components/Results.js';
// import FakeBookings from '../data/fakeBookings.json';

export default class Bookings extends Component {
  search = () => {
    console.info('TO DO!');
  };
  
  render() {
    return (
      <div className="App-content">
        <p>{'There are bookings available on ' + new Date().toLocaleDateString()}</p>
        <div className="container">
          <Search search={this.search} />
          {/* <Results results={this.state.results} /> */}
        </div>
      </div>
    );
  }
}
