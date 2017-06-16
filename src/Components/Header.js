import React, { Component } from 'react';
import Logo from './Logo';

class Header extends Component {
  render() {
    return (
      <div id="header" className="row">
        <Logo />
      </div>
    )
  }
}

export default Header;
