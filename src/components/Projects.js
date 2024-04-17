import React from 'react';
import { useState } from 'react';
import image1 from '../assets/img/project1.jpeg';
import image2 from '../assets/img/project2.png';
import image3 from '../assets/img/project3.JPG';
import image4 from '../assets/img/project4.jpg';
import image5 from '../assets/img/project5.JPG';
import image6 from '../assets/img/project6.JPG';
function Projects() {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);
  const projects = [
    {
      title: 'Project 1',
      company: 'KenGen',
      assignment: `ACQUISITION, SURVEY AND PRODUCTION OF TITLE DEEDS FOR SONDUMIRIU HYDRO-ELECTRIC POWER PROJECT`,
      description: ` Geo-acre surveys was contracted to process
      the Title Deeds for both KENGEN and the affected community. The exercise involved
      procurement of titles, consolidating and fixing the boundaries for the project area.
      `,
      image: image1
    },
    {
      title: 'Project 2',
      company: 'KTDA',
      description: ` TOPOGRAPHICAL SURVEY, CONSULTING SERVICES FOR WATER SUPPLY TO
      assignment:`,
      description: ` Kenya Tea Development Authority (KTDA) thought it was wise to acquire
      land for a new tea factory site at Rianyamwamu in Kisii district. There was need to
      survey the sections of the land to be acquired for the purpose of compensational
      planning purpose.The purpose of the survey was to acquire a detailed
      topographical map for detailed Engineering Design (DED) of the project.
      `,
      image:image2
    },
    // Add more projects as needed...
    {
        title: 'Project 3',
        company: 'CODA AND PATNERS',
        assignment: `LAND ACQUISITION AND CADASTRAL MAPPING FOR
        KIKIMA-KITHUNGO-MBUMBUNI ROAD (E478)
        `,
        description: `The Kikima-Kithongo-Mbumbuni road (E4478) is approximately 27.5km. The road traverses from a relatively flat ground
        at Mbumbuni to step rocky area towards Kikima market. Geo-acre surveys
        was contracted to carry out the above mentioned tasks which also include:
        (i) Establishment of control points, benchmarks and reference beacons by searching for the
        national trig points and use them as the base in locating the control points. In the event
        these were not available, the use of suitable GPS systems was to be employed.
        (ii) Detailed topographical survey along the alignment using modern total station and GPS.
        The control points were to be used as the datum. Width of the survey to over the entire
        road reserve but not less than 30m and much wider in areas where alignments could be
        changed to improve the horizontal alignment.
        (iii) Survey and location of existing or proposed infrastructures/services, road reserve and
        access and possible re-location of services.
        (iv) Topographical surveys of drainage structure`,
        image: image3
        },
        {
        title: 'Project 4',
        company: 'COUNTY COUNCIL OF KIRINYAGA',
        assignment: `Topographical survey, planning and subdivision of Ngariama settlement scheme
        into 5067 parcels`,
        description: `. The assignment entailed cadastral survey for subdivision of the Council’s
        parcel land into 4,000 parcels to be allocated to allottees and further hiving out of public and/or
        open spaces.
        There was a long spell of interruption as disputes arose and became violent on ground
        threatening the safety of staff and equipment but with the goodwill of area administration and the state, the situation has calmed down and we anticipate rapid execution of the
        remaining task.  `,
        image:image4
        },
        {
        title: 'Project 5',
        company: 'JACARANDA HOTEL & PIZZA GARDEN',
        assignment: 'Delineation of extent of Jacaranda Hotel & Pizza Garden- Westlands.',
        description: `The assignment became necessary since there was a dispute between our client and Nairobi
        City Council over some parking within these two properties. The dispute over the ownership of
        the parking resuscitated our client to request for our services to place all the boundary beacons
        which was done in accordance to the Survey Act Cap 299 (Laws of Kenya)
        Main Challenges
        Nairobi City Council disputed our results as they thought that since the two properties were
        fenced the fences clearly marked the extent of the properties.
        This called for Nairobi City council to get services from another surveyor who repeated the
        exercise in our presence.
        Since the survey was done to Fixed/Precise Boundary Standards, the results of the other
        Surveyor agreed with our earlier survey. `,
        image: image5
        },
        {
        title: 'Project 6',
        company: 'GIBB AFRICA LTD',
        assignment: `(i) Topographical survey for Wajir-Mandera Road and design of storm waters,
        drainage, culverts and junctions.
        (ii) Mapping a 135 acre farm and all the expected output were met to the
        satisfaction of the client. Plotting was done using Micro-station and run on HP
        800C plotter.`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus, in aliquam odio ultricies. Nullam nec nunc nec risus lacinia ultricies. Nullam nec nunc nec risus lacinia ultricies.',
        image: image6
        },
        
  ];
  const toggleProjectDetails = (index) => {
    setExpandedProjectIndex(index === expandedProjectIndex ? null : index);
  };
  return (
    <div className='projects container align-items-center'>
    <h1 className="text-center">Our Projects</h1>
    <p className="text-center">Geo-acre surveys Ltd caters to a global clientele with diverse land management needs. Our extensive client roster includes renowned builders, developers, engineering firms, businesses, financial institutions, educational institutions, and government bodies.</p>

    <div className="row">
      {projects.map((project, index) => (
        <div className="col-md-12 mb-4" key={index}>
          <div className="row align-items-center">
            <div className="col-md-11">
              <div className="card">
                <div className="card-body">
                <div className='row' onClick={() => toggleProjectDetails(index)} style={{ cursor: 'pointer' }}>
                  <div className='col-md-8'>
                  <h5 className="card-title" >
                    {project.title} 
                
                  </h5>
                  </div>
                  <div className='col-md-2'>
                    <span className="arrow">{expandedProjectIndex === index ? '▼' : '►'}</span>
                  </div>
                  </div>
                  {expandedProjectIndex === index && (
                    <>
                      <img src={project.image} className="img-fluid" alt={project.title} />
                      <p className="card-text"><strong>Company:</strong> {project.company}</p>
                      <p className="card-text"><strong>Assignment:</strong> {project.assignment}</p>
                      <p className="card-text"><strong>Description:</strong> {project.description}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  );
}

export default Projects;
