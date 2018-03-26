import React from 'react';
import {shallow} from "enzyme";
import Welcome from "./Welcome";
import mockOpeningCrawlData from "../../MockData/MockOpeningCrawl";

describe('Welcome', () => {
  const mockCrawlData = mockOpeningCrawlData;
  let wrapper = shallow(<Welcome crawl={mockCrawlData}/>);
  
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});