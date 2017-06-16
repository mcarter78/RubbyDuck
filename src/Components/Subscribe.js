import React, { Component } from 'react';
import EmailInput from './EmailInput';
import SubmitButton from './SubmitButton';

class Subscribe extends Component {
  constructor(props) {
    super(props);
    // Set initial state for this component
    this.state = {
      input: '',
      email: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }
  handleEmailChange(event) {
    // Store the input value
    const input = event.target.value;
    // And set that value in state
    this.setState({ input: input });
  }
  handleEnter(e) {
    // If enter key pressed
    if (e.charCode === 13) {
      // Call the submit function
      this.handleSubmit();
    }
  }
  handleSubmit() {
    // Store the current value of input from state
    const input = this.state.input;
    // Clear the input value in state, set email to the input value
    this.setState({
      input: '',
      email: input
    }, () => {
      // TODO: Call the utility function to send POST request
      console.log(this.state.email);
    });
  }
  render() {
    return (
      <div id="subscribe" className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
        {this.state.email !== '' ? (
          <EmailInput
            val="Thanks for subscribing!"/>
        ) : (
          <div>
            <h4>Subscribe now and we'll keep you updated on details of our launch, our products, and all the ducky details!</h4>
            <EmailInput
              text="Enter your email"
              change={this.handleEmailChange}
              keyPress={(event) => this.handleEnter(event)}/>
            <SubmitButton
              click={() => this.handleSubmit()}/>
          </div>
        )}
      </div>
    )
  }
}

export default Subscribe;
