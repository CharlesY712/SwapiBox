import React, { Component } from "react";
import fetchPeople from "../API/fetchPeople";
import PropTypes from 'propt'

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      vehicles: [],
      planets: [],
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

  getVehicleData = async () => {
    if (this.props.location.pathname === "/vehicles") {
      console.log("vehicles page");
    }
  }

  getPlanetsData = async () => {
    if (this.props.location.pathname === "/planets") {
      console.log("planets page");
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
      this.getVehicleData();
      this.getPlanetsData();
      this.getFavoritesData();
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>Card 1</h1>
        </div>
        <div>
          <h1>Card 2</h1>
        </div>
        <div>
          <h1>Card 3</h1>
        </div>
        <div>
          <h1>Card 4</h1>
        </div>
        <div>
          <h1>Card 5</h1>
        </div>
        <div>
          <h1>Card 6</h1>
        </div>
      </div>
    );
  }
}

export default CardContainer;
