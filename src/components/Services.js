import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faLandmark, faTools, faMountain, faHandshake, faBuilding, faDraftingCompass, faGlobe, faTree, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Services() {
  const servicesData = [
    {
      title: "General Boundary Survey",
      info: "Precise delineation of property boundaries.",
      icon: faMapMarkerAlt
    },
    {
      title: "Cadastral Survey",
      info: "Mapping and registration of land parcels.",
      icon: faLandmark
    },
    {
      title: "Engineering Survey",
      info: "Detailed measurement for construction projects.",
      icon: faTools
    },
    {
      title: "Topographical Survey",
      info: "Comprehensive mapping of terrain features.",
      icon: faMountain
    },
    {
      title: "Land Conveyancy",
      info: "Transfer of land ownership documentation.",
      icon: faHandshake
    },
    {
      title: "Physical Planning",
      info: "Urban development and zoning assessments.",
      icon: faBuilding
    },
    {
      title: "C.A.D Output",
      info: "Computer-aided design for accurate representation.",
      icon: faDraftingCompass
    },
    {
      title: "Geographic Information System (G.I.S)",
      info: "Spatial data analysis and visualization.",
      icon: faGlobe
    },
    {
      title: "Environmental Impact Assessment (E.I.A)",
      info: "Evaluation of environmental effects.",
      icon: faTree
    },
    {
      title: "Pre-feasibility and feasibility studies",
      info: "Assessment of project viability.",
      icon: faCheckCircle
    }
  ];

  return (
    <div>
      {/* <!-- Service Start --> */}
      <div class="container-xxl py-5 services">
        <div class="container">
          <div class="text-center mx-auto title" style={{maxWidth: "500px"}}>
            <h1 class="display-6 mb-5 ">
              We Provide Expert Survey Solutions.
            </h1>
          </div>
          <div class="row g-4 justify-content-center">
            {servicesData.map((service, index) => (
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`} key={index}>
                <div class="service-item rounded h-100 p-5">
                  <div class="d-flex align-items-center ms-n5 mb-4">
                    <div class="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                      <FontAwesomeIcon icon={service.icon} className="text-light" size='3x' />
                    </div>
                    <h4 class="mb-0">{service.title}</h4>
                  </div>
                  <p class="mb-4">{service.info}</p>
                  <a class="btn btn-light px-3" href="">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}
    </div>
  );
}

export default Services;