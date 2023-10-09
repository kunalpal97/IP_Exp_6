import React from 'react';
import { Link } from 'react-router-dom';
import Call from './Call';

function Projects() {
  const projects = [
    { id: 1, title: 'Project Brrrgrrr', description: 'A react based frontend where a user can order any burger add to cart etc..' },
    { id: 2, title: 'Project Blogapp', description: 'A blog application which fully based on MERN stack ' },
    
  ];

  return (
    <div>
      <center>

      <h2>Projects</h2>
      </center>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
      <hr></hr>
      <center><b>Call me</b>
        
      <Call rollno={62} name={"Sumeet"} age={21} phone={"9892385514"}/>
      </center>
    </div>
  );
}

export default Projects;
