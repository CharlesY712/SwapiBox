import React, { Component } from "react";
import fetchPeople from "../API/fetchPeople";

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

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      if (this.props.location.pathname === "/people") {
        console.log("people page");
        const people = fetchPeople();
        this.setState({ people });
      }
  
      if (this.props.location.pathname === "/vehicles") {
        console.log("vehicles page");
      }
  
      if (this.props.location.pathname === "/planets") {
        console.log("planets page");
      }
  
      if (this.props.location.pathname === "/favorites") {
        console.log("favorites page");
      }
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
