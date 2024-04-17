import React from 'react'
import Counter from './constants/Counter'

function Facts() {
  return (
    <div  className='container facts'>
        <div className='row'>
            <div className='col-md-4 details text-center' >
            <span> <Counter endNumber={100}  /></span>
           
            <h4>Projects Completed</h4>
            </div>
            <div className='col-md-4 text-center'>
            <span> <Counter endNumber={100}  /></span>
            <h4>Happy Clients</h4>
            </div>
            <div className='col-md-4 text-center'>
            <span> <Counter endNumber={100}  /></span>
            <h4>Team Members</h4>
            </div>
        </div>

      
    </div>
  )
}

export default Facts
