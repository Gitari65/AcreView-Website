import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Courasel1 from '../assets/img/working-people1.jpeg';
import Courasel2 from '../assets/img/aerial-view.jpeg';
import Courasel3 from '../assets/img/survey-tools1.jpeg';
import landingImage1 from '../assets/img/landing-page1.jpeg';
  import Courasel4 from '../assets/img/background.jpeg';
function CouraselComponent() {
  return (
    <Carousel>
    <Carousel.Item>
    <img src={landingImage1} className="d-block w-100" alt="First slide" />
      <Carousel.Caption>
      <div className="container courasel-content ">
          <h1>Unlock the power of precision with our cutting-edge land surveying solutions</h1>
          <p>Get a quote today and discover how we can elevate your project.</p>
          <div className="action-buttons ">
          <button className="btn btn-quote w-50 mr-5">Get A Quote</button>
          <button className="btn btn-learn-more w-50">Learn More</button>
        </div>
        </div>
      
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
    <img src={Courasel1} className="d-block w-100" alt="First slide" />
      <Carousel.Caption>
      <div className="container courasel-content ">
      <h1>Navigate the ever-changing landscape of land management  alongside our seasoned expertise at Geo-acre Surveys Limited. </h1>
         
          <div className="action-buttons ">
          <button className="btn btn-quote w-50 mr-5">Get A Quote</button>
          <button className="btn btn-learn-more w-50">Learn More</button>
        </div>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={Courasel3} className="d-block w-100" alt="First slide" />
      <Carousel.Caption>
      <div className="container courasel-content ">
          
          <h1>Equipped with the latest surveying tools and expertise, ensuring accuracy and efficiency in every measurement, every time.</h1>
          <div className="action-buttons ">
          <button className="btn btn-quote w-50 mr-5">Get A Quote</button>
          <button className="btn btn-learn-more w-50">Learn More</button>
        </div>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default CouraselComponent;
