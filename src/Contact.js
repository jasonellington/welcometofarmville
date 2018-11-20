import React, { Component } from 'react';
import ReactContactForm from 'react-mail-form';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Contact Us.</h1>
        </div>
        <section className="m-5">
          <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
          <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly.</p>
          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="name" name="name" className="form-control" />
                      <label for="name" className="">Your name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="email" name="email" className="form-control" />
                      <label for="email" className="">Your email</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input type="text" id="subject" name="subject" className="form-control" />
                      <label for="subject" className="">Subject</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                      <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center text-md-left">
                <button type="button" class="btn btn-first" data-dismiss="modal">Send</button>
              </div>
              <div className="status"></div>
            </div>
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fa fa-map-marker fa-2x"></i>
                  <p>Farmville, VA 23901, USA</p>
                </li>
                <li>
                  <i className="fa fa-phone mt-4 fa-2x"></i>
                  <p>434.392.1633</p>
                </li>
                <li>
                  <i className="fa fa-envelope mt-4 fa-2x"></i>
                  <p>jedesign@embarqmail.com</p>
                </li>
              </ul>
            </div>
          </div>
      </section>
    </div>
    );
  }
}

export default Contact;
