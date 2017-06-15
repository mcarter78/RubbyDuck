import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/Components/App';
import Header from '../src/Components/Header';
import Main from '../src/Components/Main';
import Footer from '../src/Components/Footer';

const wrapper = shallow(<App />);

describe('<App />', () => {

  it('should render without crashing', () => {
    shallow(<App />);
  })

  it('should render a <Header /> component', () => {
    const header = [<Header />];
    expect(wrapper.containsAllMatchingElements(header)).toEqual(true);
  });

  it('should render a <Main /> component', () => {
    const main = [<Main />];
    expect(wrapper.containsAllMatchingElements(main)).toEqual(true);
  });

  it('should render a <Footer /> component', () => {
    const footer = [<Footer />];
    expect(wrapper.containsAllMatchingElements(footer)).toEqual(true);
  });

});
