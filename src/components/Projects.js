import React from 'react';
import { Link } from 'react-router-dom';
import Call from './Call';

function Projects() {
  const projects = [
    { id: 1, title: 'BMI Calculator', description: 'In this user can enter there height and weight after that using javascript login it will tell weather you are fit or not' },
    { id: 2, title: 'Static Page', description: 'It is made using Html css only and here i mainly focus on designing' },
    
  ];

  return (
    <div>
      <center>

      <h2>Projects</h2>
      </center>
      <ul>
        {
        projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))
        }
      </ul>
      <hr></hr>
      <center><b>Contact Me!!!</b>
        
      <Call rollno={50} name={"Kunal"} age={21} phone={"7738569363"}/>
      </center>
    </div>
  );
}

export default Projects;
