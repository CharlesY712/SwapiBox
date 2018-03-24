import React, { Component } from "react";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import CardContainer from "../CardContainer/CardContainer";
import Welcome from "../Welcome/Welcome";
import fetchOpeningCrawl from "../../API/fetchOpeningCrawl";

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawl: null
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
        <header className='header'>
          <Link to="/" className='swapiLink'>
            <h1 className="App-title">SwapiBox</h1>
          </Link>
          <NavLink to="/people" className="people">People</NavLink>
          <NavLink to="/planets" className="planets">Planets</NavLink>
          <NavLink to="/vehicles" className="vehicles">Vehicles</NavLink>
          <NavLink to="/favorites" className="favorites">0 Favorites</NavLink>
        </header>
        {this.state.crawl && (
          <Switch>
            <Route
              exact path="/"
              render={() => <Welcome crawl={this.state.crawl} />}
            />
            <Route
              path="/people"
              render={({location}) => <CardContainer 
                location={location}
              />}
            />
            <Route
              path="/planets"
              render={({location}) => <CardContainer 
                location={location}
              />}
            />
            <Route
              path="/vehicles"
              render={({location}) => <CardContainer 
                location={location}
              />}
            />
            <Route
              path="/favorites"
              render={({location}) => <CardContainer 
                location={location} />}
            />
          </Switch>
        )}
      </div>
    );
  }
}

export default App;
