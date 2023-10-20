import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <center>

      <h2>About Me</h2>
      <p>
        Hello My name is kunal pal <br></br> 
        Roll No is 50<br></br>
        I like to travel and watching and playing cricket too!!
        <br></br>
        I study in Vivekanand education society eduction of technology <br></br>Div : D15B Branch: Information technology

      </p>
      <Link to='/projects'><button>Projects</button></Link>
      </center>
    </div>
  )
}

export default About