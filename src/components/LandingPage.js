import React from 'react';
import landingpageImage from '../assets/img/landingpage4.png';
import Image1 from '../assets/img/landing-photo-3.png';
import backgroundImage from '../assets/img/background.png';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className='landing-page container-fluid' >
        
            <div className='row  '>
            <div className=' col-md-1 col-lg-1 col-sm-0   mt-3  ' >
            </div>
                <div className='landing-details col-md-5 col-lg-6 col-sm-5   mt-3 ' >
                    <div className='landing-page-text mb-5 pt-2 wow fadeInLeft'>
                        <h1 className='mb-2'>Get cutting-edge land surveying solutions with our seasoned expertise at Geo-acre Surveys Limited</h1>
                        <p>Get a quote today and discover how we can elevate your project.</p>
                    </div>
                    <div className='landing-page-buttons wow fadeInLeft   '>
                    <Link to={'/contacts'}>
                        <button className=' btn-get-quote '>Get a Quote</button>
                    </Link>
                    <Link to={'/aboutus'}>
                        <button className=' btn-learn-more'>Learn More</button>
                        </Link>
                     </div>
                </div>
                <div className='col-md-4 col-lg-5 wow fadeInRight  col-sm-5 '  >
                <img id='landing-photo' src={Image1}/>
                </div>
              
            </div>
        </div>
    );
}

export default LandingPage;
