import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '../src/Components/SubmitButton';

const wrapper = shallow(<SubmitButton />);

describe('<SubmitButton />', () => {

  it('should render without crashing', () => {
    shallow(<SubmitButton />);
  });

  it('should render a button element', () => {
    const button = [<button>Submit</button>];
    expect(wrapper.containsAllMatchingElements(button)).toEqual(true);
  });

});
