import React from "react";
import {shallow} from "enzyme";
import CardContainer from "./CardContainer";

describe('CardContainer', () => {
  /* eslint-disable no-undef */
  const mockFetchPeople = jest.fn();
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve('banana')
  }));
  /* eslint-enable no-undef */
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer location={location} />);
  });

  it('should have default states', () => {
    expect(wrapper.state()).toEqual({ 
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      favoritesQuantity: 0 
    });
  });

  it('should call fetchPeople when getPeopleData is called', () => {

    wrapper.instance().getPeopleData();
    expect(mockFetchPeople).toHaveBeenCalled();
  });

  it('should set the state when getPeopleData is called', () => {
    wrapper.instance().getPeopleData();
    // console.log(wrapper.state());
  });
});