import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../src/Components/Footer';

const wrapper = shallow(<Footer />);

describe('<Footer />', () => {

  it('should render without crashing', () => {
    shallow(<Footer />);
  });

});
