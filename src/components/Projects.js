import React from 'react';
import './projects.css'; // Import the projects.css file
import Project1 from '../images/project1.jpg'; // Import the project1.jpg file
import Project2 from '../images/project-2.png'; // Import the project2.jpg file
import Project3 from '../images/project-1.png'; // Import the project3.jpg file
import Project4 from '../images/product-research-tool.png'; // Import the project4.jpg file

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      tools: 'React, HTML, CSS',
      image: Project2,
      link: 'www.google.com',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      tools: 'Node.js, Express, MongoDB',
      image: Project3,
      link: 'www.google.com',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of Project 3',
      tools: 'JavaScript, jQuery, Bootstrap',
      image: Project4,
      link: 'www.google.com',
    },
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      tools: 'React, HTML, CSS',
      image: Project4,
      link: 'www.google.com',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      tools: 'Node.js, Express, MongoDB',
      image: Project1,
      link: 'www.google.com',
    },
  ];

  return (
    <div className="projects-container" id="projects-section">
      <h2 className="projects-title">Recent Projects</h2>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li
            key={project.id}
            className={`project-item color-${(index % 5) + 1}`}
          >
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Tools: {project.tools}</p>
              {/* <!-- button to view project --> */}
              <a href={project.link} className="project-link">
                View Project
              </a>
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
