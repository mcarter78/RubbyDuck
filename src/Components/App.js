import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  rubbyDuck() {
    let nums = [];
    let sign = prompt('You found RubbyDuck FizzBuzz! Enter a number!');
    for (let i = 1; i <= sign;i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        nums.push('RubbyDuck!')
      } else if (i % 3 === 0) {
        nums.push('Rubby');
      } else if (i % 5 === 0) {
        nums.push('Duck');
      } else {
        nums.push(i.toString());
      }
    }
    alert(nums);
  }
  render() {
    return (
      <div>
        <div id="top">
          <Header />
          <Main />
          <i className="fa fa-bath" onClick={this.rubbyDuck}></i>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
