import React from 'react';
import './PlanetsCard.css';
import PropTypes from 'prop-types';

const PlanetsCard = ({name, terrain, population, climate, residents}) => {
  return (
    <div className='card'>
      <h1>{name}</h1>
      <h4>Terrain: {terrain}</h4>
      <h4>Population: {population}</h4>
      <h4>Climate: {climate}</h4>
      <h4>Residents: {residents.length ? residents : 'None'}</h4>
    </div>
  );
};

export default PlanetsCard;