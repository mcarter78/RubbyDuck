import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/Components/Header';

const wrapper = shallow(<Header />);

describe('<Header />', () => {

  it('should render without crashing', () => {
    shallow(<Header />);
  });

});
