import React from 'react';
import './projects.css'; // Import the projects.css file

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      tools: 'React, HTML, CSS',
      image: 'project1.jpg',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      tools: 'Node.js, Express, MongoDB',
      image: 'project2.jpg',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of Project 3',
      tools: 'JavaScript, jQuery, Bootstrap',
      image: 'project3.jpg',
    },
  ];

  return (
    <div className="projects-container" id="projects-section">
      <h2>Recent Projects</h2>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Tools: {project.tools}</p>
            </div>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
