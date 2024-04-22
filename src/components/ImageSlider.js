import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import staff1 from '../assets/img/staff1.jpeg';
import staff2 from '../assets/img/staff2.jpeg';
import staff from '../assets/img/staff.jpeg';

const staffData = [
  { imageUrl: staff1, name: 'Joseph G. Gitari', designation: 'CEO' },
  { imageUrl: staff2, name: 'Edith K. Mwai', designation: 'Surveyor' },
  { imageUrl: staff,name: 'John Kihagi', designation: 'Physical Planner' },
    { imageUrl: staff, name: 'David W. Mwangi', designation: 'Approved Assistant' },
    { imageUrl: staff, name: 'Martin K. Maingi', designation: 'Land Surveyor' },
  // Add more staff data as needed
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1>Our Team</h1>
      </div>
      <Slider {...settings}>
        {staffData.map((staff, index) => (
          <div key={index} className="staff-details " style={{ margin: '0 10px' }}>
            <img className="card-img-top" src={staff.imageUrl} alt={staff.name} />
            <div className="card-body">
              <h5 className="staff-title">{staff.name}</h5>
              <p className="staff-description">{staff.designation}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
