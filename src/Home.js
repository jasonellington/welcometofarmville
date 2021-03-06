import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="container">
            <div className="inner cover">
              <h1 className="cover-heading"><span>Discover Farmville!</span></h1>
              <p className="lead-text"><span>Welcome. That's how we want you to feel.</span></p>
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
