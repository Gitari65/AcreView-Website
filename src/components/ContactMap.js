import React from 'react';

function ContactMap() {
  return (
    <div className="map-container">
          <iframe
        title="Edipark Plaza, Thika"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.965098441685!2d37.0144013!3d-0.993887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4d073e1de2b3%3A0xae33f51618a7fe25!2sEdipark%20Plaza%2C%20Thika%20Greens%2C%20Kahaini!5e0!3m2!1sen!2ske!4v1649850219735!5m2!1sen!2ske"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default ContactMap;
