import React from 'react';
import {shallow} from 'enzyme';
import PlanetsCard from './PlanetsCard';
import MockPlanetData from '../../MockData/MockPlanetData';

describe('PlanetsCard', () => {
  const mockPlanetsData = MockPlanetData;
  let wrapper = shallow(<PlanetsCard 
    name={mockPlanetsData.name}
    terrain={mockPlanetsData.terrain}
    population={mockPlanetsData.population}
    climate={mockPlanetsData.climate}
    residents={mockPlanetsData.residents}/>);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});