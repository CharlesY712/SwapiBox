import React, { Component } from "react";
import fetchPeople from "../API/fetchPeople";
import fetchPlanets from "../API/fetchPlanets";
import fectchVehicles from "../API/fetchVehicles";
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
    console.log("favorites page");
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

  render() {
    return (
      <div>
        <h1>Card 1</h1>
      </div>
    );
  }

  createCards() {
    return (
      <div>
        <Card people={this.state.people}/>
      </div>
    )
  }

}

CardContainer.propTypes = {
  location: PropTypes.object
};

export default CardContainer;
