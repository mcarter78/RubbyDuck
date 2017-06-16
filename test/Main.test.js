import React from 'react';
import { shallow } from 'enzyme';
import Main from '../src/Components/Main';
import Subscribe from '../src/Components/Subscribe';

const wrapper = shallow(<Main />);

describe('<Main />', () => {

  it('should render without crashing', () => {
    shallow(<Main />);
  });

  it('should render a <Subscribe /> component', () => {
    const subscribe = [<Subscribe />];
    expect(wrapper.containsAllMatchingElements(subscribe)).toEqual(true);
  });

});
