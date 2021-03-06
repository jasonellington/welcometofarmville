import React, {Component} from 'react';

class Company extends Component {
  render() {
    let company = this.props.company;

    return (
      <div className="col-md-4" id={company.id}>
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
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-small btn-second" data-toggle="modal" data-target={`#details-${company.id}`} id={`#details-${company.id}`}>View</button>
              </div>
              <span className={this._getclassNames(company.badge)}>{company.badge}</span>
            </div>
          </div>
        </div>
        <div className="modal fade bd-example-modal-lg" id={`details-${company.id}`} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{company.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <i className="fas fa-times icon-green"></i>
                </button>
              </div>
              <div className="modal-body">
                <img
                  className="card-img-top company-image"
                  src={company.image}
                  alt={company.name}
                  data-holder-render="true"
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-second" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* grab badge color */
  _getclassNames(badge) {
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
