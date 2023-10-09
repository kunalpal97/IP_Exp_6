import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <center>

      <h2>About Me</h2>
      <p>
        This is Sumeet Kumar Singh <br></br> 
        Roll no 62<br></br>
        I like to play football and take hard challenges in life even thought if i cant accomplish them
        <br></br>
        I study in VESIT <br></br>div :d15B branch: Information technology

      </p>
      <Link to='/projects'><button>Projects</button></Link>
      </center>
    </div>
  )
}

export default About