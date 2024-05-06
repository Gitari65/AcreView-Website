import React from 'react'
import image from '../assets/img/background-cover.png'

const Header = ({names}) => {
  return (
    <div className="container-fluid header mt-4 mb-3 pt-5 wow fadeIn">
    <div className='title '>
       <h1>{names}</h1>
         <p className='pages'>PAGES | {names}</p>
    </div>
      
    </div>
  )
}

export default Header
