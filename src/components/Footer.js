import React from 'react'
//location,email and call icons fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
//importing fontawesome icon twitter,facebook,youtube,linkedin
import { faTwitter,faYoutube,faFacebook,faLinkedin} from '@fortawesome/free-brands-svg-icons'
//import home icon from fontawesome
import { faHome } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/img/logo.png'
import {Link} from 'react-router-dom'

const callIcon = <FontAwesomeIcon icon={faPhoneAlt} />
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />
const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />
const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
const homeIcon = <FontAwesomeIcon icon={faHome} />



const Footer = () => {
  return (
    <div>
       {/* <!-- Footer Start --> */}
    <div
      class="container-fluid footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <h1 class="text-white mb-4">
              <img
                class="img-fluid me-3"
                src={logo}
                alt="logo"
              />
            </h1>
            <p>
            
Geo-acre Surveys Limited (GAS) is a licensed company that provides specialized services   for urban planning, environmental management, forestry, and cadastral surveys.
            </p>
            <div class="d-flex pt-2">
              <a class="btn btn-square me-1" href="">{twitterIcon}</a>
              <a class="btn btn-square me-1" href="">{facebookIcon}</a>
             
              <a class="btn btn-square me-0" href="">{linkedinIcon}</a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5 class="footer-header mb-4">Address</h5>
            <p>
              {homeIcon}  Head Office : 
Edipark Plaza, Thika Greens, Kandara Road . 
            </p>
            <p>
              - Kerugoya Branch at Ushirika Bank
House 2nd floor.
            </p>
            <p>
              - Meru Branch at Old Messacco Building, Ground Floor. 
            </p>
            <p>
             - Narok Branch at Nenkai Plaza, First Floor. 
            </p>
           
          </div>
       
          {/* <div class="col-lg-3 col-md-6">
            <h5 class="text-light mb-4">Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div class="position-relative mx-auto" style={{maxWidth: "250px"}}>
              <input
                class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                class="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div> */}
                <div class="col-lg-3 col-md-6">
            <h5 class=" mb-4 footer-header">Contact us</h5>
            <a className='contacts-link' href='tel:+254729-569800'>{callIcon} +254729-569800</a><p></p>
            <p>{emailIcon} geoacresurveys@yahoo.com</p>
            <br></br>
            <h5 class="footer-header mb-4">Opening Hours</h5>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 8:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
            </div>
            <div class="col-lg-3 col-md-6">
            <h5 class="mb-4 footer-header ">Quick Links</h5>
            <Link class=" quick-link" to="/about">About Us</Link><br></br>
            <Link class=" quick-link" to="/contacts">Contact Us</Link><br></br>
            <Link class=" quick-link" to="/services">Our Services</Link><br></br>
            <Link class=" quick-link" to="/">Terms & Condition</Link><br></br>
            <Link class=" quick-link" to="/contacts">Support</Link><br></br>
          </div>
         
      {/* <div class="col-lg-3 col-md-6">
                <h5 class="text-light mb-4">Opening Hours</h5>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 8:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
        </div> */}
            </div> 
     
      </div>
      <div class="container-fluid copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="#">Geo Acres</a>, All Right Reserved.
            </div>
            <div class="col-md-6 text-center text-md-end">
             <a href="#"> </a>
              <br />Distributed By:
              <a href="#" target="_blank"> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Footer End --> */}
    </div>
  )
}

export default Footer
