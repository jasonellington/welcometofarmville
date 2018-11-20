import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './base';

import Company from './Company';

class List extends Component {
  state = {
    table: fire.database().ref('companies'),
    companies: [],
    companysToDisplay: [],
    filter: '',
    searchValue: '',
    load: false
  }

  componentDidMount() {
    //using firebase to request a response from our table
    this.state.table.on('value', (response) => {
      let objects = response.val();
      let companies = [];
      for(let key in objects) {
        let company = objects[key];
        company.key = key;
        companies.push(company);
      }
      this.setState({companies, companysToDisplay: companies, load: true});
    });

  }

  handleSearchChange = (event) => {
    event.preventDefault();
    const searchValue = event.target.value;

    this.setState((prevState, props) => {

      const searchedCompanyList = this.state.companies.filter(company =>
        company.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );

      return {
        companysToDisplay: searchedCompanyList,
        searchValue
      }
    });
  }

  handleClick = (filter) => {


    this.setState((prevState, props) => {

      const filteredCompanyList = this.state.companies.filter(company =>
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
      companysToDisplay: this.state.companies,
      searchValue: ''
    });
  }

  render() {

    let companysToDisplay = this.state.companysToDisplay;
    let companyMapper;

    if(companysToDisplay.length != 0) {
      companyMapper = companysToDisplay.map((company, index) => {
        company.id = index;
        return (
          <Company company={company} key={index} />
        )
      });
    } else if(!this.state.load) {
      companyMapper = <LoadingCompanies />
    } else {
      companyMapper = <NoCompanies />
    }

    return (
      <main>
        <div className="jumbotron">
          <h1>Explore.</h1>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-md-center">
              <div className="thumbnail">
                <img key="eat" alt="eat" className="filter-button" src={"./img/buttons/eat.png"} onClick={() => this.handleClick("Eat")} />
              </div>
              <div className="thumbnail">
                <img key="play" alt="play" className="filter-button" src={"./img/buttons/play.png"} onClick={() => this.handleClick("Play")} />
              </div>
              <div className="thumbnail">
                <img key="services" alt="services" className="filter-button" src={"./img/buttons/services.png"} onClick={() => this.handleClick("Services")} />
              </div>
              <div className="thumbnail">
                <img key="shop" alt="shop" className="filter-button" src={"./img/buttons/shop.png"} onClick={() => this.handleClick("Shop")} />
              </div>
          </div>
          <CompanySearch value={this.state.searchValue} onChange={this.handleSearchChange} clearSearch={this.clearSearch}/>
        </div>
        <div className="container-fluid py-5 bg-light">
          <div className="row justify-content-md-center">
            {companyMapper}
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
        {props.value ? <ClearSearchButton clearSearch={props.clearSearch} /> : null}
      </div>
    </div>
	</div>
);

const LoadingCompanies = () => (
  <div className="text-center">
    <h2>Loading Companies...</h2>
  </div>
)

const NoCompanies = () => (
  <div className="text-center">
    <h2>Oh No!</h2>
    <p>Sorry, the company you're looking for isn't a part of The Welcome Book!</p>
    <p>Click below and tell us who you want us to add!</p>
    <Link className="btn btn-lg btn-first" to="/contact">Contact Us</Link>
  </div>
)

const ClearSearchButton = (props) => (
  <div className="clearSearch">
    <button className="btn btn-lg btn-first m-1" onClick={props.clearSearch}>
      <i className="fa fa-times"></i>
    </button>
  </div>
)

export default List;
