import React from 'react'
import './Education_profile.css'
import {FaRegHandPointRight} from 'react-icons/fa'
import {FiCornerUpRight} from 'react-icons/fi'
import {AiOutlineLink} from 'react-icons/ai'
const Education_profile = () => {
    return (
        <section id='skills'>
          <h2> My Education</h2>
          <div className="container experience__container">
            {/* frontend */}
            <div className='experience__frontend'>
              <h1>SJB INSTITUTE OF TECHNOLOGY</h1>
              <h3>(01-08-2018-28-07-2022)</h3>
              <h3>Location:-Bengaluru , Karnataka</h3>
              <h2>Bachelor Of Engineering(B.E)</h2>
              <h2>Stream:- Computer Science and Engineering</h2>
              
             
            </div>
          </div>
        </section>
      )
    }
    


export default Education_profile