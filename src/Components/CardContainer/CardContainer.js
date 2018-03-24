import React, { Component } from "react";
import fetchPeople from "../API/fetchPeople";
import fetchPlanets from "../API/fetchPlanets";
import fectchVehicles from "../API/fetchVehicles";
import PeopleCard from "../PeopleCard/PeopleCard";
import PlanetsCard from "../PlanetsCard/PlanetsCard";
import VehiclesCard from "../VehicleCard/VehicleCard";
import "./CardContainer.css";
import PropTypes from "prop-types";

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    };
  }

  getPeopleData = async () => {
    const people = await fetchPeople();
    this.setState({ people });
  };

  getPlanetsData = async () => {
    const planets = await fetchPlanets();
    this.setState({ planets });
  };

  getVehicleData = async () => {
    const vehicles = await fectchVehicles();
    this.setState({ vehicles });
  };

  getFavoritesData = async () => {
  };

  determinePath() {
    switch (this.props.location.pathname) {
    case "/people":
      this.getPeopleData();
      break;
    case "/planets":
      this.getPlanetsData();
      break;
    case "/vehicles":
      this.getVehicleData();
      break;
    case "/favorites":
      this.getFavoritesData();
      break;
    default:
      break;
    }
  }

  componentDidMount() {
    this.determinePath();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.determinePath();
    }
  }

  createPeopleCards() {
    const peopleArray = this.state.people;
    const peopleCards = peopleArray.map((person, index) => {
      return <PeopleCard 
        key={index}
        name={person.name}
        species={person.species}
        home={person.homeworld}
        population={person.population}
      />;
    });
    return (
      <div className="card-container">
        {peopleCards}
      </div>
    );
  }

  createPlanetsCards() {
    const planetsArray = this.state.planets;
    const planetsCards = planetsArray.map((planet, index) => {
      return <PlanetsCard 
        key={index}
        name={planet.name}
        terrain={planet.terrain}
        population={planet.population}
        climate={planet.climate}
        residents={planet.residents}
      />;
    });
    return (
      <div className="card-container">
        {planetsCards}
      </div>
    );
  }

  createVehicleCards() {
    const vehiclesArray = this.state.vehicles;
    const vehiclesCards = vehiclesArray.map((vehicle, index) => {
      return <VehiclesCard 
        key={index}
        name={vehicle.name}
        model={vehicle.model}
        type={vehicle.class}
        passengers={vehicle.passengers}
      />;
    });
    return (
      <div className="card-container">
        {vehiclesCards}
      </div>
    );
  }

  render() {
    switch (this.props.location.pathname) {
    case "/people":
      return this.createPeopleCards();
    case "/planets":
      return this.createPlanetsCards();
    case "/vehicles":
      return this.createVehicleCards();
    case "/favorites":
      return this.createPeopleCards();
    default:
      break;
    }
  }
}

CardContainer.propTypes = {
  location: PropTypes.object
};

export default CardContainer;
