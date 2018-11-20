import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

import Home from './Home';
import List from './List';
import Contact from './Contact';
import companyData from './companyData';

const Header = (props) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/" exact activeClassName="active">
        <img
          className="navbar-logo"
          src={"logo.png"}
          alt="Home"
        />
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item m-2">
            <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item m-2">
            <NavLink className="nav-link" to="/explore" activeClassName="active">Explore</NavLink>
          </li>
          <li className="nav-item m-2">
            <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container-fluid">
            <Route exact path="/" component={Home} />
            <Route
              path="/explore"
              render={(props) => <List {...props} companyData={companyData} />}
            />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
