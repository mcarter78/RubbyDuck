import React from 'react';
import { shallow } from 'enzyme';
import EmailInput from '../src/Components/EmailInput';

const wrapper = shallow(<EmailInput />);

describe('<EmailInput />', () => {

  it('should render without crashing', () => {
    shallow(<EmailInput />);
  });

  it('should render an input element', () => {
    const input = [<input />];
    expect(wrapper.containsAllMatchingElements(input)).toEqual(true);
  });
  
});
