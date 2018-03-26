import React from 'react';
import {shallow} from 'enzyme';
import PeopleCard from './PeopleCard';
import MockPeopleData from '../../MockData/MockPeopleData';

describe('PeopleCard', () => {
  const mockPeopleData = MockPeopleData;
  let wrapper = shallow(<PeopleCard 
    name={mockPeopleData.name}
    species={mockPeopleData.species}
    home={mockPeopleData.homeworld}
    population={mockPeopleData.population}/>);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});