import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/Components/Header';
import Logo from '../src/Components/Logo'

const wrapper = shallow(<Header />);

describe('<Header />', () => {

  it('should render without crashing', () => {
    shallow(<Header />);
  });

  it('should render a <Logo /> component', () => {
    const logo = [<Logo />];
    expect(wrapper.containsAllMatchingElements(logo)).toEqual(true);
  });

});
