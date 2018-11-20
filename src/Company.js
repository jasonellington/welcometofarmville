import React, {Component} from 'react';
import './Company.css';

class Company extends Component {
  render() {
    let company = this.props.company;
    console.log(this.props.key);

    return (
      <div className="col-md-4" id={this.props.key}>
        <div className="card mb-4">
          <img
            className="card-img-top company-image"
            src={company.image}
            alt={company.name}
            data-holder-render="true"
          />
          <div className="card-body">
            <h5 className="card-title"><b>{company.name}</b></h5>
            <p className="card-deal">{company.deal}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-small btn-second" data-toggle="modal" data-target={`#details${this.props.key}`} id={`#details${this.props.key}`}>View</button>
              </div>
              <span className={this._getClassNames(company.badge)}>{company.badge}</span>
            </div>
          </div>
        </div>
        <div className="modal fade bd-example-modal-lg" id={`details${this.props.key}`} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{company.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <i class="icon fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <img
                  className="card-img-top company-image"
                  src={company.image}
                  alt={company.name}
                  data-holder-render="true"
                />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-second" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* grab badge color */
  _getClassNames(badge) {
    let className = 'badge p-2 ';
    if (badge === 'Eat') {
      className += 'badge-eat';
    }
    else if (badge === 'Play') {
      className += 'badge-play';
    }
    else if (badge === 'Services') {
      className += 'badge-services';
    }
    else if (badge === 'Shop') {
      className += 'badge-shop';
    } else {
      className += 'badge-success';
    }
    return className;
  }

}

export default Company;
