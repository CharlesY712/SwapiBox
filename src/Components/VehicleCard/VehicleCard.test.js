import React from 'react';
import {shallow} from 'enzyme';
import VehicleCard from './VehicleCard';
import MockVehicleData from '../../MockData/MockVehicleData';

describe('VehicleCard', () => {
  const mockVehicleData = MockVehicleData;
  let wrapper = shallow(<VehicleCard 
    name={mockVehicleData.name}
    model={mockVehicleData.model}
    type={mockVehicleData.class}
    passengers={mockVehicleData.passengers}/>);
  
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
