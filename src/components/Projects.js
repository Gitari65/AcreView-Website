import React, { useState } from 'react';
import image1 from '../assets/img/project1.jpeg';
import image2 from '../assets/img/project2.png';
import image3 from '../assets/img/project3.JPG';
import image4 from '../assets/img/project4.jpg';
import image5 from '../assets/img/project5.JPG';
import image6 from '../assets/img/project6.JPG';

function Projects() {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 5;

  const projects = [
    {
      title: 'Project 1',
      company: 'KenGen',
      assignment: `ACQUISITION, SURVEY AND PRODUCTION OF TITLE DEEDS FOR SONDUMIRIU HYDRO-ELECTRIC POWER PROJECT`,
      description: ` (a) PROJECT: ACQUISITION, SURVEY AND PRODUCTION OF TITLE DEEDS FOR SONDUMIRIU HYDRO-ELECTRIC POWER PROJECT
      DESCRIPTION: When the Sondu-miriu hydro-electric power project was set, the parcels
      of land in the project area were acquired. Since the community was resisting the
      acquisition, Kengen acquired the parcels of land in the project area, compensated the
      owners but did not process the Title Deeds. Geo-acre surveys was contracted to process
      the Title Deeds for both KENGEN and the affected community. The exercise involved
      procurement of titles, consolidating and fixing the boundaries for the project area.   
      (b) L.R. No 280 40- FORMERLY NEW GRANT- MUKOWE-LAMU
      Lamu being an Island, its main power source is generation owned and managed by
      KENGEN. (National Environment Management Authority) indicated that the site being
      on the shares of Indian Ocean be transferred to a stable ground. The government
      granted KENGEN a new site on the mainland (Mukowe). The Involved surveying the
      new site and processing of certificate of title for the same, the survey was registered in
      survey of Kenya records office as F/R No 480/4.
      `,
      image: image1
    },
    {
      title: 'Project 2',
      company: 'KTDA',
      description: ` TOPOGRAPHICAL SURVEY, CONSULTING SERVICES FOR WATER SUPPLY TO
      assignment:`,
      description: `PROJECT 1: TOPOGRAPHICAL SURVEY, CONSULTING SERVICES FOR WATER SUPPLY TO
      THE PROPOSED RIANYAMWAMU TEA FACTORY.
      DESCRIPTION: Kenya Tea Development Authority (KTDA) thought it was wise to acquire
      land for a new tea factory site at Rianyamwamu in Kisii district. There was need to
      survey the sections of the land to be acquired for the purpose of compensational
      planning purpose. The source was to involve the following:
      (a) In all cases, take the co-ordinate and benchmarks of the factory site, intake site, forest
      line/gate, major infrastructural developments such as roads, surface or buried
      surfaces/rock/dips, wells, way leave, etc. all tied to UTM. Boundary beacons were to be
      picked up or established.
      (b) Detailed mapping of the entire site and its environs to indicate levels, orientations and
      positions of all features (natural and man-made) that may affect design and
      construction costs of the proposed works. Spot heights at 5-10 m grids depending on
      the terrain and contours at 0.50m intervals.
      (c) Comprehensive survey of the rising main route including but not limited to spot heights,
      contours, horizontal and longitudinal profiles of the way leave from intake to factory
      water work-site; which was to be mapped like the intake. Spot heights at 5-15m grids
      and contour intervals of 0.5m based on local terrain. The end results/deliverables were
      to be a topographical sheets and cadastral maps showing the project site,
      boundaries/fences, neighboring streams/tributaries with names, flow directions and coordinates and possible routes of the storm drains for the site.
      PROJECT 2: TOPOGRAPHICAL SURVEY WORKS FOR THE PROPOSED IRARU SMALL
      HYDROPOWER PROJECT SITE AND SOUTH MARA SMALL HYDROPOWER
      PROJECT SITE.
      DESCRIPTION: In both project sites, the purpose of the survey was to acquire a detailed
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
        assignment: `Topographical survey and Mapping.`,
        description: `(i) Topographical survey for Wajir-Mandera Road and design of storm waters,
        drainage, culverts and junctions.
        (ii) Mapping a 135 acre farm and all the expected output were met to the
        satisfaction of the client. Plotting was done using Micro-station and run on HP
        800C plotter`,
        image: image6
        },
        {
          title: 'Project 7',
          company: 'KWAME INVESTMENT LTD.',
          assignment: `Topographical Survey for Planning Purposes, Preparation of scheme plans, change of
          user and sub-division of Land Reference No. 14589- North Airport Road into 93 plots.`,
          description: `Our firm was retained by the client to partake the above assignment
          As a requirement of the Physical Planning Act, A Development Plan requires to be prepared.
          Section 30 (1) of the Act clearly states; No person shall carry out development within an area
          of a local authority without a development permission granted by the local authority
          Once the council receives a Subdivision Scheme Proposal, the same is discussed at the Town
          Planning Committee for approval.
          Once approved the town clerk of the council communicates the approval through a prescribed
          form (PPA2) to the Commissioner of Lands
          The Commissioner of Lands then refers the proposal to the Director of Physical Planning and
          Director of Surveys for comments.
          After receiving favorable comments, the subdivision proposed is approved subject to various
          conditions. These conditions are meant to ensure that there is controlled development
          providing for all the necessary facilities the likes of roads, open spaces and other public utilities.
          The council ensures that the conditions of approval are met and it’s only then that the
          commissioner of Lands will accord final approval to the subdivision. After the final approval, the
          developer then goes ahead to survey the plots to facilitate issuance of sub-titles
          `,
          image: image6
          },     
              {
              title: 'Project 8',
              company: 'NIPPON KOEI COMPANY LIMITED',
              assignment: `Subdivision, Registration, consolidation and fixing of boundaries of parcels of land in the
              sondu/Miriu Hydroelectric Power Station, Nyakach, Kisumu`,
              description: `Subdivision, Registration, consolidation and fixing of boundaries of parcels of land in the
              sondu/Miriu Hydroelectric Power Station, Nyakach, Kisumu.
              On or about the 24th may 2006, we did receive a letter of invitation for us to tender for the
              assignment. In the letter it was stipulated that a firm was to be selected under methodology of
              Survey and Cost.
              Bidders were:
               Encouraged to familiarize themselves with the local conditions and take them into
              account in preparing their bids and to obtain firsthand information on the
              assignment and local conditions.
               To bear all the costs associated with the preparation and submission their bids.
              The bids were to be submitted at 1300 Hrs. on 8th June 2006 at Kisumu and the opening was at
              1300Hrs.
              We organized our time and camped at Nyakach for preparation of the bids. We did receive and
              acquired all the necessary details to facilitate preparation of the bids. We managed to prepare
              the bids and on the 8th June submitted the same.
              The opening of the bid was done and a total of 6 (six) reputable Surveying Firms had submitted
              the same.
              On or around 16th June 2006, we did receive an E-mail and a fax to the effect that we were
              short listed for the assignment. The contract was affected on signing the contract which was
              done on 17th June 2006.
              The team assigned with the project is on site undertaking the above assignment`,
              image: image6
              },     {
                title: 'Project 9',
                company: 'KIRINYAGA DISTRICT CO-OPERATIVE UNION (KDCU)',
                assignment: `Extension of Lease for Land Reference Nos. 209/2414 (Munyu House along
                  Munyu Road),
                  209/2540/2 (Olympic House along Koinange Street), 1870/VI//83 (Kiricorp Flats in
                  Westlands), 209/2098 (Located along Juja Road, Pangani.`,
                description: `LAND TENURE
                Basically there are two types of tenure i.e. Freehold and Leasehold interests.
                Freehold is the greatest interest in land and is usually with no restriction for use or occupation.
                Freehold is held indefinitely and is not subject to land rent/rates.
                Leasehold is an interest in land for a determined and specified period (can go up to 99 years)
                and is usually subject to payment of land rent except in some cases where land rent is not
                payable and the lease is said to be granted under peppercorn rent if demanded as the leasor is
                entitled to demand a payment of rent however small. Leases are also subject to certain
                conditions and covenants and can differ in respect of agricultural and urban land. Leases are
                subject to extension.
                In Public Notice in a Newspaper, the commissioner of land informed the members of public that
                all leasehold properties with unexpired term of less than 50 years were subject to renewal.
                Procedure of Lease Extension
                When it becomes necessary for a lessee to have his lease renewed, he submits an application to
                either the commissioner of lands or the local authority under whose jurisdiction the land is
                located.
                Where an application is made to the commissioner of lands, the proposal is circulated to
                various authorities for comments. These include;
                 The local authority
                 Director of Physical planning
                 Director of Surveys.
                After favourable comments have been received, the commissioner of lands takes into
                consideration the purpose/reason for which the extension is required and grants and the
                extension for up to 99 years. Reasons to consider include;
                 The state/condition of the development on the ground
                 Intention to renovate
                 Intention to re-develop.
                Where an application is made to the local authority, the proposal after going through the town
                planning committee is forwarded to the commissioner of lands for approval.
                The commissioner, after consultations with the director of physical planning and the Director of
                surveys then gives his approval subject to various conditions.
                After lease extension is granted, re-survey of the plot is carried out to re re-establish the
                beacons/ boundaries.
                The plot is then valued to determine the new rent for the extended term.
                Documentation of the extended term is done either by way of endorsement or by way of
                surrender and re-grant.`,
                image: image6
                },  {
                  title: 'Project 10',
                  company: 'EMBAJO PROPERTIES',
                  assignment: `SUBDIVISION OF PLOTS TO CADASTRAL STANDARDS `,
                  description: `The assignment involved boundary beacons re-establishment, conducting a
                  topographical survey of parcel of land for planning purposes followed by ground demarcation.
                  `,
                  image: image6
                  },
  ];
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const displayProjects = projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

  const toggleProjectDetails = (index) => {
    setExpandedProjectIndex(index === expandedProjectIndex ? null : index);
  };

  return (
    <div className='projects container align-items-center '>
      <h1 className="text-center  ">Our Projects</h1>
      <p className="text-center text-description">Geo-acre surveys Ltd caters to a global clientele with diverse land management needs. Our extensive client roster includes renowned builders, developers, engineering firms, businesses, financial institutions, educational institutions, and government bodies.</p>

      <div className="row">
        {displayProjects.map((project, index) => (
          <div className="col-md-12 mb-4 projects" key={index}>
            <div className="row align-items-center">
              <div className="col-md-11">
                <div className="card">
                  <div className="card-body">
                    <div className='row' onClick={() => toggleProjectDetails(currentPage * projectsPerPage + index)} style={{ cursor: 'pointer' }}>
                      <div className='col-lg-9 col-md-9 col-sm-9'>
                        <h5 className="card-title" >
                          {project.title}
                        </h5>
                      </div>
                      <div className='col-lg-1 col-md-1 col-sm-1'>
                        <span className="arrow">{expandedProjectIndex === currentPage * projectsPerPage + index ? '▼' : '►'}</span>
                      </div>
                    </div>
                    {expandedProjectIndex === currentPage * projectsPerPage + index && (
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

      <div className="pagination-buttons">
        <button className='btn-next' onClick={prevPage} disabled={currentPage === 0}>Previous</button>
        <button className='btn-previous' onClick={nextPage} disabled={currentPage === totalPages - 1}>Next</button>
      </div>
    </div>
  );
}

export default Projects;
