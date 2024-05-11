import React from 'react'

import logo from '../assets/img/acres-logo.png'
// import'bootstrap/dist/css/bootstrap.min.css'
import {Link,NavLink} from 'react-router-dom'
//import right arrow icon from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import TopBar from './TopBar'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />
const phoneIcon = <FontAwesomeIcon icon={faPhone} />

function NavigationBar() {
  return (
    <>
   

    <nav class="navbar navbar-expand-lg navbar-light bg-light navigation-bar navbar-default fixed-top mb-2 ">
   
          <div class="container-fluid">
         <a>
          <img src={logo} alt='logo' />
         </a> 
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navigation-links" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/about">About us</NavLink>
                
                
                </li>

               
                <li class="nav-item">
                  <NavLink class="nav-link" to="/services">Our Services</NavLink>
                </li>
                <li class="nav-item dropdown">
                  <NavLink class="nav-link dropdown-toggle" to="/projects" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Portfolio
                  </NavLink>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><NavLink class="dropdown-item" to="/projects">Projects</NavLink></li>
                    <li><hr class="dropdown-divider"></hr></li>
                    <li><NavLink class="dropdown-item" to="/staff">Staff and  Directors</NavLink></li>
                    <li><hr class="dropdown-divider"></hr></li>
                    {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                  </ul>
                  </li>
                {/* <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></hr></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                  
                </li> */}
                <li class="nav-item">
                  <NavLink class="nav-link" to="/contacts">Contact us</NavLink>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li> */}
              </ul>
              <form class="d-flex">
              <div className='nav-bar-callus'>
              <button className='btn  px-3 d-none d-lg-block'>
              <a href='tel:+254729-569800'>
               {phoneIcon} Call us: +254729-569800
              </a>

              </button>
              </div>
              <div className='nav-bar-button'>
              <button id='button-nav' >
                <NavLink to='/contacts'>
                <button >Get A Quote</button></NavLink>
                {arrowIcon}
              </button>
              </div>
              </form>
            </div>
          </div>
</nav>
</>
  )
}

export default NavigationBar