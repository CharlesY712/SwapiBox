import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () =>{

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    /* eslint-disable no-undef */
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve('banana')
    }));
    /* eslint-enable no-undef */
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch opening crawl data on mount', async () => {
    // console.log(wrapper.state())
    // console.log(wrapper.instance().componentDidMount();
  });

  it('should set the state on mount', () => {

  });
});