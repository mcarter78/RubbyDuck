import React, { Component } from 'react';
import Logo from './Logo';

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="row">
        <div className="footer-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <Logo />
          <h4 className="subtitle col-md-12">Where rubber meets the water.</h4>
          <h4 className="col-md-12"><strong>Anchorage, Alaska</strong></h4>
          <a className="col-md-12" href="#"><i className="fa fa-twitter fa-2x"></i>twitter.com/rubbyduck</a>
          <a className="col-md-12" href="#"><i className="fa fa-facebook fa-2x"></i> facebook.com/rubbyduck</a>
          <a className="col-md-12" href="#"><i className="fa fa-instagram fa-2x"></i>instagram.com/rubbyduck</a>
        </div>
        <div className="footer-right col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <iframe
						width="80%"
						height="320"
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD21jOWs4HrwVHOOP75V44uhgtbJTyfcZs&q=Anchorage+AK&zoom=12">
          </iframe>
        </div>
      </div>
    )
  }
}

export default Footer;
