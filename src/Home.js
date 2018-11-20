import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="container">
            <div className="inner cover">
              <h1 className="cover-heading"><span>Discover Farmville!</span></h1>
              <p className="lead-text"><span>Weclome. That's how we want you to feel.</span></p>
              <p className="lead">
                <Link className="btn btn-lg btn-first" to="/explore">Explore</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
