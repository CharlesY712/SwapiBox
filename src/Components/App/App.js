import React, { Component } from "react";
import { Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import CardContainer from "../CardContainer/CardContainer";
import Welcome from "../Welcome/Welcome";
import fetchOpeningCrawl from "../API/fetchOpeningCrawl";
import fetchPeople from "../API/fetchPeople";

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawl: null,
      people: [{}, {}],
      planets: [],
      vehicles: [],
      favorites: []
    };
  }

  async componentDidMount() {
    const crawl = await fetchOpeningCrawl();
    this.setState({ crawl });
    const peopleObj = await fetchPeople();
    const people = peopleObj.results;
    this.setState({ people });
    console.log(this.state.people);
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        <Link to="/" className='swapiLink'>
          <h1 className="App-title">SwapiBox</h1>
        </Link>
        <NavLink to="/people" className="people">
          People
        </NavLink>
        <NavLink to="/vehicles" className="vehicles">Vehicles</NavLink>
        <NavLink to="/planets" className="planets">Planets</NavLink>
        <NavLink to="/favorites" className="favorites">0 Favorites</NavLink>
        {this.state.crawl && (
          <div>
            <Route
              exact path="/"
              render={() => <Welcome crawl={this.state.crawl} />}
            />
            <Route
              path="/people"
              render={() => <CardContainer people={this.state.people} />}
            />
            <Route
              path="/planets"
              render={() => <CardContainer planets={this.state.planets} />}
            />
            <Route
              path="/vehicles"
              render={() => <CardContainer vehicles={this.state.vehicles} />}
            />
            <Route
              path="/favorites"
              render={() => <CardContainer favorites={this.state.favorites} />}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
