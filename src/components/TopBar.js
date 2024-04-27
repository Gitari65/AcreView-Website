import React from 'react'
//import facebook,titter and linked from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import{faPhoneAlt,faEnvelopeOpen,faClock} from '@fortawesome/free-solid-svg-icons'
const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
const linkedinIcon = <FontAwesomeIcon icon={faLinkedinIn} />
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />
const emailIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />
const clockIcon = <FontAwesomeIcon icon={faClock} />

const TopBar = () => {
  return (
    <>
            {/* <!-- Topbar Start --> */}
            
    <div className="container-fluid  top-bar text-white-50 py-2 px-0 d-none d-lg-block top-bar">
      <div className="row gx-0 align-items-center  top-bar-text ">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center me-4">
           <p >{phoneIcon}
            <small> +254729-569800</small></p> 
          </div>
          <div className="h-100 d-inline-flex align-items-center me-4">
          <p>
          {emailIcon}
            <small> geoacresurveys@yahoo.com</small>
          </p>
          </div>
          <div className="h-100 d-inline-flex align-items-center me-4">
          <p>
          {clockIcon}
            <small> Mon - Fri : 09 AM - 05 PM</small>
             </p>
          </div>
         
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center">
            <a className="text-white-50 ms-4" href="" >{facebookIcon}</a>
            <a className="text-white-50 ms-4" href="" >{twitterIcon}</a>
            <a className="text-white-50 ms-4" href="">{linkedinIcon}</a>
            {/* <a className="text-white-50 ms-4" href="">{instagramIcon}</a> */}
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Topbar End --> */}
    </>
  )
}

export default TopBar
