import React from 'react';
import {shallow} from 'enzyme';
import PlanetsCard from './PlanetsCard';

describe('PlanetsCard', () => {
  const mockPlanetsData = 
  let wrapper = shallow(<PlanetsCard 
    name={planet.name}
    terrain={planet.terrain}
    population={planet.population}
    climate={planet.climate}
    residents={planet.residents}/>)
});