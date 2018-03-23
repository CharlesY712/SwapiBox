import React from 'react';
import './PeopleCard.css';
import PropTypes from 'prop-types';

const PeopleCard = ({name, species, home, population}) => {
  return (
    <div className='card'>
      <h1>{name}</h1>
      <h4>Species: {species}</h4>
      <h4>Homeworld: {home}</h4>
      <h4>population: {population}</h4>
    </div>
  );
};

export default PeopleCard;