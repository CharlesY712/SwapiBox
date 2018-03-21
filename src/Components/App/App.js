import React, { Component } from "react";
import { Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import CardContainer from "../CardContainer/CardContainer";
import Welcome from "../Welcome/Welcome";
import fetchOpeningCrawl from "../API/api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawl: null,
      person: [{}, {}]
    };
  }

  async componentDidMount() {
    const crawl = await fetchOpeningCrawl();
    this.setState({ crawl });
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        <Link to="/">
          <h1 className="App-title">SwapiBox</h1>
        </Link>
        <NavLink to="/people" className="people">
          People
        </NavLink>
        <NavLink to="/vehicles">Vehicles</NavLink>
        <NavLink to="/planets">Planets</NavLink>
        {this.state.crawl && (
          <div>
            <Route
              exact path="/"
              render={() => <Welcome crawl={this.state.crawl} />}
            />
            <Route
              path="/people"
              render={() => <CardContainer people={this.state.person} />}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
