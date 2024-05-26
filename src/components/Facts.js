import React from 'react';
import Counter from './constants/Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faSmile, faUsers } from '@fortawesome/free-solid-svg-icons';


function Facts() {
  return (
    <div className='container facts'>
      <div className='row'>
        <div className='col-md-4 details text-center'>
          <div className="counter-container">
            <Counter endNumber={500} />
            <span className="plus-sign">+</span>
          </div>
          <h4><FontAwesomeIcon icon={faProjectDiagram} /> Projects Completed</h4>
        </div>
        <div className='col-md-4 text-center'>
          <div className="counter-container">
            <Counter endNumber={500} />
            <span className="plus-sign">+</span>
          </div>
          <h4><FontAwesomeIcon icon={faSmile} /> Happy Clients</h4>
        </div>
        <div className='col-md-4 text-center'>
          <div className="counter-container">
            <Counter endNumber={20} />
            <span className="plus-sign">+</span>
          </div>
          <h4><FontAwesomeIcon icon={faUsers} /> Team Members</h4>
        </div>
      </div>
    </div>
  );
}

export default Facts;
