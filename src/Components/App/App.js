import React, { Component } from "react";
import { Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import CardContainer from "../CardContainer/CardContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: [{},{}]
    }
  }

  render() {
    return (
      <div className="App">
        <Link to="/">
          <h1 className="App-title">SwapiBox</h1>
        </Link>
        <NavLink to="/people" className="people">People</NavLink>
        <NavLink to="/vehicles">Vehicles</NavLink>
        <NavLink to="/planets">Planets</NavLink>
        <Route path="/people" render={ () => <CardContainer people={this.state.person} />} />
        <Route exact path="/" render={ () => <h1>Home</h1>} />
      </div>
    );
  }
}

export default App;
