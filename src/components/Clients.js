import React, { useEffect, useRef, useState } from 'react';
import buildingLogo from '../assets/img/building.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image2 from '../assets/img/project2.png';
import image3 from '../assets/img/clients/dekut logo.jpeg';

import image12 from '../assets/img/client12.png';


import image10 from '../assets/img/client5.jpeg';

import image11 from '../assets/img/client6.png';

import image13 from '../assets/img/client9.jpeg';
import image14 from '../assets/img/clients/delmonte logo.jpeg';
import image15 from '../assets/img/clients/kra logo.png';
import image16 from '../assets/img/clients/kura logo.png';
import image17 from '../assets/img/clients/kcb logo.png';
import image18 from '../assets/img/clients/kenha logo.png';
import image19 from '../assets/img/clients/seku logo.jpeg';


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

    { id: 2, name: 'Client 2', logo: image10 },
    { id: 3, name: 'Client 3', logo: image11 },
    { id: 4, name: 'Client 4', logo: image14 },
    { id: 1, name: 'Client 1', logo: image13 },
    { id: 4, name: 'Client 4', logo: image15 },
    { id: 4, name: 'Client 4', logo: image16 },
    { id: 4, name: 'Client 4', logo: image17 },
    { id: 4, name: 'Client 4', logo: image18 },
    { id: 4, name: 'Client 4', logo: image19 },
  ,
    { id: 4, name: 'Client 4', logo: image12 },
    
    
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
              <div key={item.id} className='image-container'>
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
