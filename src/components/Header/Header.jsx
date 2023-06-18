import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
   <div id="container">
        <div className='home border'>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
        <div className='about border'>
            <div>
                <Link to="/about">About</Link>
            </div>
        </div>
        <div className='education border'>
            <div>
                <Link to="/education">Education</Link>
            </div>
        </div>
        <div className='skills border'>
            <div>
                <Link to="/skills">Skills</Link>
            </div>
        </div>
        <div className='experience border'>
            <div>
                <Link to="/experience">Experiences</Link>
            </div>
        </div>
        <div className='portfolio border'>
            <div>
                <Link to="/portfolio">Portfolio</Link>
            </div>
        </div>
        <div className='contact border'>
            <div>
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
        <div className="profile-logo">
         
        </div>
   </div>
  )
}

export default Header