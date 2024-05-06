import React from 'react'
import surveyorPic from '../assets/img/group-photo8.jpeg'

function Background() {
  return (
    <div className='container background'>
        <div className='row g-5 p-3'>
            <div className='col-sm-12 col-md-6 col-lg-6 wow slideInLeft'>
                 <h1>Who we are.</h1> 
                 <p>We specialize in the supply of geospatial imagery (to provide land asset
                    information quickly and cost-effectively) and consulting services (for engineering and
                    environmental management, cadastral surveys) and as such, is recognized locally as
                    providing to clients a complete business and management solutions.</p>  
             </div>
             <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
            <div
              className="position-relative overflow-hidden rounded ps-5 pt-5 h-100"
              style={{minHeight:" 400px"}}
            >
              <img
                className="position-absolute w-100 h-100"
                src={surveyorPic}
                alt=""
                style={{objectFit: "cover"}}
              />
              <div
                className="position-absolute top-0 start-0 bg-white rounded pe-3 pb-3"
                style={{width:"200px " ,height: "200px"}}
              >
                <div
                  className="d-flex flex-column justify-content-center text-center experience rounded h-100 p-3"
                >
                  <h1 className="text-white mb-0">1998</h1>
                  <h2 className="text-white">Since</h2>
                  <h5 className="text-white mb-0"></h5>
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Background