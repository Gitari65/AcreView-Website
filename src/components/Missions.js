import React from 'react'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Missions() {
  return (
    <div className='container missions  align-items-center mb-4'>
    <h1 className=' mb-2 align-text-center'>Geo Acres background</h1>
    <p>Geo-Acre Surveys was established in 1998 with its main focus being land surveying and its
related disciplines.The company specializes in the supply of geospatial imagery (to provide land asset
information quickly and cost-effectively) and consulting services (for engineering and
environmental management, cadastral surveys) and as such, is recognized locally as
providing to clients a complete business and management solutions.</p>
    <div className='row align-items-center'>


    <div className='col-sm-12 col-lg-6 col-md-6 align-items-center '>
        <div class="card vision-desc  p-2  align-items-center wow fadeInUp " style={{width:"24rem"}}>
        <div className='align-items-center'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-desc" size='3x' /> 
            </div>
            <div class="card-body align-items-center">
                <h5 class="card-title align-text-center">Vision</h5>
                    <p class="card-text align-text-center">To be the leading Consultancy firm in the region, excellent in Land Management and Land
                    Information systems.
                    </p>
                        
            </div>
        </div>
        </div>
   
    <div className='col-sm-12 col-lg-6 col-md-6 align-items-center '>
        <div class="card vision-desc  p-2  align-items-center wow fadeInUp " style={{width:"24rem"}}>
        <div className='align-items-center'>
            <FontAwesomeIcon icon={faBullseye} className="icon-desc" size='3x' /> 
            </div>
            <div class="card-body align-items-center ">
                <h5 class="card-title align-text-center">Mission</h5>
                     <p class="card-text align-text-center">The main purpose of the firm is to provide hands-on, superior quality services and products to
                    our clients through a friendly working environment and to always deliver these services and
                    products on time and within budget so as to achieve repeat business from Clients.
                    </p>
               
            </div>
        </div>
        </div>
        
       
    </div>
       
    </div>
  )
}

export default Missions
