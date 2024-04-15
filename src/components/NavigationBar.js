import React from 'react'

import logo from '../assets/img/acres-logo.png'
// import'bootstrap/dist/css/bootstrap.min.css'

function NavigationBar() {
  return (
    <>
    {/* // <div className='navigation-bar' >
    //   <div className='nav-bar-logo'>
    //   <img src={logo} alt='logo' />
    //   </div>
    //   <div className='nav-bar-links '>
    //     <a href='#' className='nav-link'>Home</a>
    //     <a href='#' className='nav-link'>About Us</a>
    //     <a href='#' className='nav-link'>Our Services</a>
    //     <div className="nav-item dropdown">
    //         <a
    //           href="#"
    //           className="nav-link dropdown-toggle"
    //           data-bs-toggle="dropdown"
    //           >Pages</a>
    //         <div className="dropdown-menu bg-light border-0 m-0">
    //           <a href="feature.html" className="dropdown-item">Features</a>
    //           <a href="appointment.html" className="dropdown-item">Appointment</a>
    //           <a href="team.html" className="dropdown-item">Team Members</a>
    //           <a href="testimonial.html" className="dropdown-item">Testimonial</a>
    //           <a href="404.html" className="dropdown-item">404 Page</a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='nav-bar-button'>
    //     <button className='btn  px-3 d-none d-lg-block'>Get A Quote</button>
    //     </div>
         
    // </div> */}
    <nav class="navbar navbar-expand-lg navbar-light bg-light navigation-bar sticky-top">
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
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About us</a>
                </li>

               
                <li class="nav-item">
                  <a class="nav-link" href="#">Our Services</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Portfolio
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Projects</a></li>
                    <li><hr class="dropdown-divider"></hr></li>
                    <li><a class="dropdown-item" href="#">Staff and  Directors</a></li>
                    <li><hr class="dropdown-divider"></hr></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
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
                  <a class="nav-link" href="#">Contact us</a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li> */}
              </ul>
              <form class="d-flex">
              <div className='nav-bar-button'>
              <button className='btn  px-3 d-none d-lg-block'>Get A Quote</button>
              </div>
              </form>
            </div>
          </div>
</nav>
</>
  )
}

export default NavigationBar