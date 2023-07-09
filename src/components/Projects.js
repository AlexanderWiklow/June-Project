import React from 'react';
import './projects.css'; // Import the projects.css file
import Project2 from '../images/project-2.png'; // Import the project2.jpg file
import Project3 from '../images/project-1.png'; // Import the project3.jpg file
import Project4 from '../images/product-research-tool.png'; // Import the project4.jpg file
import Project5 from '../images/project-5.png'; // Import the project5.jpg file
import Project6 from '../images/todoscreen.png'; // Import the project6.jpg file
import Project7 from '../images/project7.png'; // Import the project7.jpg file
import Project8 from '../images/project8.png'; // Import the project8.jpg file

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Product landing page',
      description: `Hiking & Stuff is a responsive ecommerce web application built with a focus on outdoor enthusiasts. It offers a broad range of hiking products, each showcased with detailed descriptions and prices.
      The mobile-first design adjusts to various screen sizes for optimal user experience. Key features include interactive UI elements, dropdown menus for detailed product information, and individual product pages for an in-depth look. The application is built using modern web technologies including semantic HTML5 markup and SCSS, which enhances accessibility and ensures better SEO results.`,
      tools: 'HTML, CSS, SASS, JavaScript',
      image: Project2,
      liveLink:
        'https://alexanderwiklow.github.io/Project-Landing-Page/index.html',
      githubLink: 'https://github.com/AlexanderWiklow/Project-Landing-Page',
    },
    {
      id: 2,
      title: 'Sports product landing page',
      description: `Sportify Web Store is a comprehensive ecommerce platform focused on sports goods, built using React. The web application offers a broad range of sports products, each displayed with detailed descriptions and prices. Designed with a responsive layout, the application ensures an optimal viewing experience across various devices.

      Key Features:
      
      Responsive Design: The application adapts to different screen sizes, providing an ideal user experience for both mobile and desktop users.
      Product Sorting: Users have the ability to sort products based on different parameters, such as name, price (in both ascending and descending order), and product category, making product search and selection a breeze.
      Product Management: The application provides features to add new products and edit existing ones, allowing for easy management of product listings.
      Single Product View: Users can explore individual product pages for more detailed information, enhancing the shopping experience.`,
      tools: 'Node.js, Express, MongoDB',
      image: Project3,
      liveLink: '',
      githubLink:
        'https://github.com/AlexanderWiklow/React-Project-Sports-Items-Web-Store',
    },
    {
      id: 3,
      title: 'Product Research Tool - Ecommerce Analytics Application',
      description: `Product Research Tool

      As a student project, the Product Research Tool I developed is an entry-level e-commerce data analysis tool. It allows users to examine customer purchase data, and through different parameters, gain basic insights to inform marketing strategies. This project, implemented in JavaScript, showcases my ability to create functional and adaptable solutions. Although it's a modest tool, it offers a practical introduction to the complexity of market research in the e-commerce domain and stands as an important step in my ongoing learning journey.`,
      tools: 'JavaScript, jQuery, Bootstrap',
      image: Project4,
      liveLink: '',
      githubLink: 'https://github.com/AlexanderWiklow/Product-Research-Tool',
    },
    {
      id: 1,
      title: 'Spicy Ramen Noodles Restaurant Page',
      description: `The "Spicy Ramen Noodles" project is a restaurant website with three key features. The "Menu" section presents a variety of dishes with pictures, ingredients, and prices. The "Book a table" section provides a form for users to make a reservation, capturing details such as names, number of guests, preferred date, and any special requirements. Lastly, the "About us" section presumably provides information about the restaurant's history and mission. This user-friendly website aims to enhance the online presence of the restaurant, facilitating easy navigation and interaction for customers.`,
      tools: 'React, HTML, CSS',
      image: Project5,
      liveLink: 'https://alexanderwiklow.github.io/Restaurant-page/',
      githubLink: 'https://github.com/AlexanderWiklow/Restaurant-page',
    },
    {
      id: 2,
      title: 'TODO application',
      description: `Interactive To-Do List Application with Social Features

      This student project is a full-stack To-Do List Application that not only enables users to manage their tasks but also incorporates social features. Users can register, log in, create, modify their to-do lists, and even add friends and view their lists. The application uses HTML5, CSS, SCSS, and React on the front-end, and Node.js, Express, and MySQL for the back-end. Key features include SQL injection protection, hashed password storage, JWT for authentication, and a social component allowing for the exchange of task lists among friends. The server maintains a clean project structure, employs appropriate HTTP methods and status codes/messages, and utilizes custom middleware for advanced request processing.`,
      tools: 'Node.js, Express, MongoDB',
      image: Project6,
      liveLink: '',
      githubLink:
        'https://github.com/AlexanderWiklow/Backend1-individual-assignment',
    },
    {
      id: 2,
      title: 'Online Resume Website',
      description: `This project is a simple and clean personal website. It presents the user's education, work experience, skills, and languages fluently in one page. Accompanied by related graphics, the site offers a smooth user experience and easy navigation. It includes a personal introduction and an easy-to-find email contact. This website is a straightforward showcase of the user's web development capabilities.`,
      tools: 'HTML, CSS',
      image: Project7,
      liveLink: '',
      githubLink: 'https://github.com/AlexanderWiklow/Week-1',
    },
    {
      id: 2,
      title: 'PHP Movie Database',
      description: `"Movie List" is a web application for displaying, editing, and adding movies, using data from a MySQL database. It features a visually appealing layout due to its CSS styling. Key technologies used include PHP for server-side scripting, MySQL for data storage, and HTML for rendering. The codebase is composed of multiple PHP scripts for distinct functionalities and a CSS file for style.
      `,
      tools: 'PHP, MySQL, HTML, CSS',
      image: Project8,
      liveLink: '',
      githubLink: 'https://github.com/AlexanderWiklow/Week-1',
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
              <h4>Tools:</h4>
              <ul>
                {project.tools.split(',').map((tool, toolIndex) => (
                  <li key={toolIndex}>{tool.trim()}</li>
                ))}
              </ul>
              {project.liveLink && project.liveLink.trim() !== '' && (
                <a href={project.liveLink} className="project-link">
                  View Project
                </a>
              )}

              {project.githubLink && project.githubLink.trim() !== '' && (
                <a href={project.githubLink} className="project-link">
                  View Code
                </a>
              )}
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
