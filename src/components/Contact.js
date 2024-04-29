import React from 'react';
import ContactMap from './ContactMap';

function Contact() {
  return (
    <div className="container-xxl py-5 contact-us">
      <div className="container">
        <div className="text-center mx-auto title" style={{ maxWidth: "500px" }}>
          <h1 className="display-6 mb-5">
            Contact Us
          </h1>
        </div>
        <div className="row">
          <div className="contact-form col-lg-6 col-md-5 col-sm-12 mb-5 wow fadeInLeft">
            <form>
              <h1>Send us a Message.</h1>
              <div className="form-group">
                <label htmlFor="exampleInputPhonenumber">Phone Number</label>
                <input type="number" className="form-control" id="exampleInputPhonenumber" placeholder="Enter phone number" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputMessage">Message</label>
                <textarea type="text" className="form-control" id="exampleInputMessage" placeholder="Write your Message..." />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="iframe-container col-lg-5 col-md-6 col-sm-12 wow fadeInRight">
            <iframe
              title="Edipark Plaza, Thika"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.965098441685!2d37.0144013!3d-0.993887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4d073e1de2b3%3A0xae33f51618a7fe25!2sEdipark%20Plaza%2C%20Thika%20Greens%2C%20Kahaini!5e0!3m2!1sen!2ske!4v1649850219735!5m2!1sen!2ske"
              className="responsive-iframe"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
