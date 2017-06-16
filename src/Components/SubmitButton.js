import React, { Component } from 'react';

class SubmitButton extends Component {
  render() {
    return (
      <div>
        <button
          id="submit-button"
          onClick={this.props.click}>
            Submit
        </button>
      </div>
    )
  }
}

export default SubmitButton;
