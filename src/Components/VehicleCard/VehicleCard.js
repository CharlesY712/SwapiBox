import React from 'react';
import './VehicleCard.css';
import PropTypes from 'prop-types';

const VehicleCard = ({name, model, type, passengers}) => {
  return (
    <div className='vehicle-card'>
      <h1 className="vehicle-card-title">{name}</h1>
      <button className="fav-button" 
        onClick={() => console.log('clicked')}></button>
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