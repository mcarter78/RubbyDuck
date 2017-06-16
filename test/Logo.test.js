import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../src/Components/Logo';

const wrapper = shallow(<Logo />);

describe('<Logo />', () => {

  it('should render without crashing', () => {
    shallow(<Logo />);
  });

  it('should render a span element', () => {
    const span = [<span>RubbyDuck</span>];
    expect(wrapper.containsAllMatchingElements(span)).toEqual(true);
  });

});
