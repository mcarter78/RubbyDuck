import React, { Component } from 'react';

class EmailInput extends Component {
  render() {
    return (
      <div>
        <input
          type="email"
          name="email"
          value={this.props.val}
          placeholder={this.props.text}
          onChange={this.props.change}
          onKeyPress={this.props.keyPress}
          required/>
      </div>
    )
  }
}

export default EmailInput;
