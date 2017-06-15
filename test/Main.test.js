import React from 'react';
import { shallow } from 'enzyme';
import Main from '../src/Components/Main';
import EmailInput from '../src/Components/EmailInput';

const wrapper = shallow(<Main />);

describe('<Main />', () => {

  it('should render without crashing', () => {
    shallow(<Main />);
  });

  it('should render a <EmailInput /> component', () => {
    const emailInput = [<EmailInput />];
    expect(wrapper.containsAllMatchingElements(emailInput)).toEqual(true);
  });

});
