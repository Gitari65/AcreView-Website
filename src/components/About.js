import React from 'react'
import Counter from './constants/Counter'
import edipark from '../assets/img/edipark.jpeg'
import support from '../assets/img/support.png'
function About() {
  return (
    <div>
     {/* <!-- About Start --> */}
    <div className="container-xxl py-5">
      <div className="container about-1">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="position-relative overflow-hidden rounded ps-5 pt-5 h-100"
              style={{minHeight:" 400px"}}
            >
              <img
                className="position-absolute w-100 h-100"
                src={edipark}
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
                  <h1 className="text-white mb-0">25</h1>
                  <h2 className="text-white">Years</h2>
                  <h5 className="text-white mb-0">Experience</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp about" data-wow-delay="0.5s">
            <div className="h-100">
              <h1 className="display-6 mb-5">
              We are here to assist you with tailored solutions for land management, utilizing cutting-edge technology for client satisfaction.
              </h1>
              <p className="fs-5 text-description mb-4">
              Our dedicated team of professionals utilizes the latest technology to deliver excellence, ensuring cost-effective solutions tailored to our clients' needs
              </p>
              <div className="row g-4 mb-4">
              <div className="col-lg-6 facts-counter wow fadeIn" data-wow-delay="0.5s">
            {/* <div className="h-100 px-4 pe-lg-0 counter">
              <div className="row g-5">
                <div className="col-sm-4">
                  <h1 className="display-5" data-toggle="counter-up">{<Counter endNumber={25}/>}</h1>
                  <p className="fs-5 text-primary">Clients</p>
                </div>
                <div className="col-sm-4">
                  <h1 className="display-5" data-toggle="counter-up">{<Counter endNumber={100}/>}</h1>
                  <p className="fs-5 text-primary">Projects Succeed</p>
                </div>
            
                <div className="col-sm-4">
                  <h1 className="display-5" data-toggle="counter-up">{<Counter endNumber={22}/>}</h1>
                  <p className="fs-5 text-primary">Team Members</p>
                </div>
              </div>
            </div> */}
          </div>
              </div>
              {/* <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p> */}
              <div className="border-top mt-4 pt-4 support">
                <div className="d-flex align-items-center">
                  <img
                    className="flex-shrink-0 rounded-circle me-3 col-1"
                    src={support}
                    alt=""
                  />
                  <h5 className="mb-0 call-us">Call Us:<a href='tel: '> +254729-569800</a></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- About End --> */}
    </div>
  )
}

export default About