import React from 'react';
import './PlanetsCard.css';
import PropTypes from 'prop-types';

const PlanetsCard = ({name, terrain, population, climate, residents}) => {
  return (
    <div className='card'>
      <h1>{name}</h1>
      <h4>Terrain: <br/>{terrain}</h4>
      <h4>Population: <br/>{population}</h4>
      <h4>Climate: <br/>{climate}</h4>
      <h4>Residents: <br/>{residents.length ? 
        residents.map((resident, index) => 
          <p key={index}>{resident}</p>) : 'None'}</h4>
    </div>
  );
};

PlanetsCard.propTypes = {
  name: PropTypes.string,
  terrain: PropTypes.string,
  population: PropTypes.string,
  climate: PropTypes.string,
  residents: PropTypes.array
};

export default PlanetsCard;