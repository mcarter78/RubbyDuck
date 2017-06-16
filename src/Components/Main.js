import React, { Component } from 'react';
import Subscribe from './Subscribe';

class Main extends Component {
  render() {
    return (
      <div id="main" className="row">
        <h1 className="main-title col-md-12">Coming Soon! Custom rubber duckies for all of your playful tub needs!</h1>
        <Subscribe />
      </div>
    )
  }
}

export default Main;
