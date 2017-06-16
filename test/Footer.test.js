import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../src/Components/Footer';
import Logo from '../src/Components/Logo';

const wrapper = shallow(<Footer />);

describe('<Footer />', () => {

  it('should render without crashing', () => {
    shallow(<Footer />);
  });

  it('should render a <Logo /> component', () => {
    const logo = [<Logo />];
    expect(wrapper.containsAllMatchingElements(logo)).toEqual(true);
  });

});
