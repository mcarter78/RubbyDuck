import React, { Component } from 'react';

class EmailInput extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
        <input
          type="email"
          name="email"
          placeholder="rubby@duck.com"/>
      </div>
    )
  }
}

export default EmailInput;
