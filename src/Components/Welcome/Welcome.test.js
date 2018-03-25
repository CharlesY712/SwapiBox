import React from 'react';
import Welcome from "./Welcome";
import {shallow} from "enzyme";
import mockOpeningCrawlData from "../../MockData/MockOpeningCrawl";

describe('Welcome', () => {
  const mockCrawlData = mockOpeningCrawlData;
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Welcome crawl={mockCrawlData}/>);
  });
  
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});