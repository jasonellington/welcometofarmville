import React, { Component } from 'react';
import { base } from './base';
import './List.css';

import Company from './Company';

class List extends Component {
  state = {
    companysToDisplay: [],
    filter: '',
    searchValue: ''
  }

  componentDidMount() {
    this.setState({
      companysToDisplay: this.props.companyData
    });
  }

  handleSearchChange = (event) => {
    event.preventDefault();
    const searchValue = event.target.value;

    this.setState((prevState, props) => {

      const searchedCompanyList = this.props.companyData.filter(company =>
        company.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
      //i need to add a filter for each category here?

      return {
        companysToDisplay: searchedCompanyList,
        searchValue
      }
    });
  }

  handleClick = (filter) => {


    this.setState((prevState, props) => {

      const filteredCompanyList = props.companyData.filter(company =>
        company.badge === filter
      );

      return {
        companysToDisplay: filteredCompanyList,
        searchValue: ''
      }
    });
  }

  clearSearch = () => {
    this.setState({
      companysToDisplay: this.props.companyData,
      searchValue: ''
    });
  }

  render() {

    let companyMapper = this.state.companysToDisplay.map((company, index) =>
      <Company company={company} key={index} />
    );

    return (
      <main>
        <div className="jumbotron">
          <h1>Explore.</h1>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-md-center">
              <div className="thumbnail">
                <img className="filter-button" src={"./img/buttons/eat.png"} onClick={() => this.handleClick("Eat")} />
              </div>
              <div className="thumbnail">
                <img className="filter-button" src={"./img/buttons/play.png"} onClick={() => this.handleClick("Play")} />
              </div>
              <div className="thumbnail">
                <img className="filter-button" src={"./img/buttons/services.png"} onClick={() => this.handleClick("Services")} />
              </div>
              <div className="thumbnail">
                <img className="filter-button" src={"./img/buttons/shop.png"} onClick={() => this.handleClick("Shop")} />
              </div>
          </div>
          <CompanySearch value={this.state.searchValue} onChange={this.handleSearchChange} clearSearch={this.clearSearch}/>
        </div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {companyMapper}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const CompanySearch = (props) => (
  <div className="row justify-content-md-center m-3">
    <div className="col-md-auto col-md-8">
      <div className="card-body row no-gutters align-items-center">
        <div className="col">
          <input
            type="text"
            value={props.value}
            onChange={props.onChange}
            name="company-search"
            className="form-control form-control-lg form-control-borderless"
            placeholder="Search"
            autoComplete="off"
          />
        </div>
        <div className="clearSearch">
          <button className="btn btn-lg btn-first m-1" onClick={props.clearSearch}>
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
    </div>
	</div>
);

export default List;
