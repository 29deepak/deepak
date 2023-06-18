import React from 'react'
import CV from '../../assets/deepak(cv).pdf'
import {Link} from 'react-router-dom'
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} className='btn' target="_blank">Download CV</a>
        <Link to="/contact" className='btn btn-primary'>Let's Talk</Link>
    </div>
  )
}

export default CTA