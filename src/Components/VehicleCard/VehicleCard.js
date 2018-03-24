import React from 'react';
import './VehicleCard.css';
import PropTypes from 'prop-types';

const VehicleCard = ({name, model, type, passengers}) => {
  return (
    <div className='card'>
      <h1>{name}</h1>
      <h4>Model: {model}</h4>
      <h4>Class: {type}</h4>
      <h4>Passengers: {passengers}</h4>
    </div>
  );
};

VehicleCard.propTypes = {
  name: PropTypes.string,
  model: PropTypes.string,
  type: PropTypes.string,
  passengers: PropTypes.string
};

export default VehicleCard;