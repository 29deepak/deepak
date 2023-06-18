import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {RiTwitterFill} from 'react-icons/ri'
import {FaDribbble} from 'react-icons/fa'
import {BsBehance} from 'react-icons/bs'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
        <Link to="/" className='footer__logo'>Deepak Kumar</Link>
        <ul className='permalinks'>
            <li><Link to ="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/experience">Experiences</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="footer__socials">
        <a href="https://www.linkedin.com/in/deepak-kumar-484970192/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/29deepak" target="_blank"><FaGithub/></a>
            <a href="https://www.facebook.com/deepak545608" target="_blank"><FaFacebookF/></a>
            <a href="https://www.instagram.com/_deepak_2910/" target="_blank"><FaInstagramSquare/></a>
            <a href="https://www.youtube.com/@user-in4jh3wz4q" target="_blank"><BsYoutube/></a>
            <a href="https://twitter.com" target="_blank"><RiTwitterFill/></a>
            <a href="https://dribbble.com/29deepak/about" target="_blank"><FaDribbble/></a>
            <a href="https://www.behance.net/7d982d60" target="_blank"><BsBehance/></a>


        </div>
        <div className="footer__copyright">
            <small>&copy; Deepak Kumar</small>
        </div>
        
    </footer>
  )
}

export default Footer