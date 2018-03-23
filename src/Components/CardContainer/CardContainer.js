import React, { Component } from "react";
import fetchPeople from "../API/fetchPeople";
import fetchPlanets from "../API/fetchPlanets";
import PropTypes from 'prop-types';

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
    if (this.props.location.pathname === "/people") {
      const people = await fetchPeople();
      this.setState({ people });
      console.log(this.state.people);
    }
  };

  getPlanetsData = async () => {
    if (this.props.location.pathname === "/planets") {
      const planets = await fetchPlanets();
      this.setState({planets});
      console.log(this.state.planets[0].residents[0]);
    }
  }

  getVehicleData = async () => {
    if (this.props.location.pathname === "/vehicles") {
      console.log("vehicles page");
    }
  }

  getFavoritesData = async () => {
    if (this.props.location.pathname === "/favorites") {
      console.log("favorites page");
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.getPeopleData();
      this.getPlanetsData();
      this.getVehicleData();
      this.getFavoritesData();
    }
  }

  render() {
    return (
      <div>
        <h1>Card 1</h1>
      </div>
    );
  }
}

CardContainer.propTypes = {
  location: PropTypes.object
};

export default CardContainer;
