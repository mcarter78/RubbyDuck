import React from 'react';
import { shallow } from 'enzyme';
import Subscribe from '../src/Components/Subscribe';
import EmailInput from '../src/Components/EmailInput';
import SubmitButton from '../src/Components/SubmitButton';

const wrapper = shallow(<Subscribe />);

describe('<Subscribe />', () => {

  it('should render without crashing', () => {
    shallow(<Subscribe />);
  });

  it('should render a <EmailInput /> component', () => {
    const emailInput = [<EmailInput />];
    expect(wrapper.containsAllMatchingElements(emailInput)).toEqual(true);
  });

  it('should render a <SubmitButton /> component', () => {
    const submitButton = [<SubmitButton />];
    expect(wrapper.containsAllMatchingElements(submitButton)).toEqual(true);
  });

});
