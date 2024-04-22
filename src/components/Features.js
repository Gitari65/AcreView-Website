import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import workingwomanImage from '../assets/img/working-woman.jpeg';
import { faCheckCircle, faHandsHelping, faCogs, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

import 'animate.css/animate.min.css';
const WOW = require('wowjs');

function Features() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <div>
      {/* <!-- Features Start --> */}
      <div className="container-xxl py-5 feature">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-6 mb-5 title"> Reasons Why People Choosing Us!</h1>
              <p className="mb-4 description">
                We provide unparalleled expertise, comprehensive consulting solutions, and cutting-edge geospatial products tailored to meet your needs.
              </p>
              <div className="row g-3">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="bg-light rounded h-100 p-3">
                    <div className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="align-self-center mb-3 feature-icon" />
                      <h5 className="mb-0">Expertise and Innovation</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="bg-light rounded h-100 p-3">
                    <div className="bg-white d-flex flex-column justify-content-center text-center rounded py-4 px-3">
                      <FontAwesomeIcon icon={faHandsHelping} className="align-self-center mb-3 feature-icon" />
                      <h5 className="mb-0">Comprehensive Consulting Solutions</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="bg-light rounded h-100 p-3">
                    <div className="bg-white d-flex flex-column justify-content-center text-center rounded py-4 px-3">
                      <FontAwesomeIcon icon={faCogs} className="align-self-center mb-3 feature-icon" />
                      <h5 className="mb-0">Cutting-Edge Geospatial Products</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div className="bg-light rounded h-100 p-3">
                    <div className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3">
                      <FontAwesomeIcon icon={faMoneyBillWave} className="align-self-center mb-3 feature-icon" />
                      <h5 className="mb-0">Cost-Effective Solutions</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="position-relative rounded overflow-hidden h-100" style={{ minHeight: "400px" }}>
                <img
                  className="position-absolute w-100 h-100"
                  src={workingwomanImage}
                  alt="Feature Image"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features End --> */}
    </div>
  );
}

export default Features;
