import React, { useEffect, useRef, useState } from 'react';
import buildingLogo from '../assets/img/building.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/img/project1.jpeg';
import image2 from '../assets/img/project2.png';
import image3 from '../assets/img/project3.JPG';
import image4 from '../assets/img/project4.jpg';
import image5 from '../assets/img/project5.JPG';
import image6 from '../assets/img/project6.JPG';
import image7 from '../assets/img/client12.png';
import image8 from '../assets/img/client3.jpeg';
import image9 from '../assets/img/client4.jpeg';
import image10 from '../assets/img/client5.jpeg';

import image11 from '../assets/img/client6.png';
import image12 from '../assets/img/client8.JPG';
import image13 from '../assets/img/client9.jpeg';


const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  // Sample client data (replace with your actual data)
  const clients = [
    { id: 1, name: 'Client 1', logo: image1 },
    { id: 2, name: 'Client 2', logo: image2 },
    { id: 3, name: 'Client 3', logo: image3 },
    { id: 4, name: 'Client 4', logo: image4 },
    { id: 1, name: 'Client 1', logo: image5 },
    { id: 2, name: 'Client 2', logo: image6 },
    { id: 3, name: 'Client 3', logo: image7 },
    { id: 4, name: 'Client 4', logo: image8 },
    { id: 1, name: 'Client 1', logo: image9 },
    { id: 2, name: 'Client 2', logo: image10 },
    { id: 3, name: 'Client 3', logo: image11 },
    { id: 4, name: 'Client 4', logo: image12 },
    { id: 1, name: 'Client 1', logo: image13 },
    
    // Add more clients as needed
  ];

  // State to keep track of current index
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  

  return (
    <div className='client container'>
      <div className="content">
      <div className="text-center mx-auto title" style={{ maxWidth: "500px" }}>
          <h1 className="display-6 mb-5 title">
            Our Clients 
          </h1>
        </div>
        <div className="container">
          <Slider {...settings}>
            {clients.map((item) => (
              <div key={item.id}>
                <img src={item.logo} alt={item.alt} className="img" />
                {/* <h2 className="title">{item.name}</h2> */}
            
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
  
 
 
};

export default Clients;
