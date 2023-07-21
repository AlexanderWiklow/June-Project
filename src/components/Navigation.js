import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './navigation.css';
import lightbulb from '../images/lightbulb.png';
import darkLightbulb from '../images/dark-lightbulb.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check local storage for dark mode key
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true',
  );

  const [bulbImg, setBulbImg] = useState(lightbulb); // Default light mode image

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (sectionId) => {
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update the bulb image and body class when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      setBulbImg(darkLightbulb); // Dark mode image
    } else {
      document.body.classList.remove('dark-mode');
      setBulbImg(lightbulb); // Light mode image
    }
  }, [isDarkMode]);

  // Update local storage when isDarkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <nav id="nav-section" className={`navigation ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo">
        <h1>AW</h1>
      </div>
      <div className="menu">
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <ul>
          <li>
            <Link
              to="about-section"
              smooth={true}
              onClick={() => handleLinkClick('about-section')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="education-section"
              smooth={true}
              onClick={() => handleLinkClick('education-section')}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="projects-section"
              smooth={true}
              onClick={() => handleLinkClick('projects-section')}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="blog-posts-section"
              smooth={true}
              onClick={() => handleLinkClick('recent-posts-section')}
            >
              Recent Posts
            </Link>
          </li>
          <li>
            <Link
              to="contact-section"
              smooth={true}
              onClick={() => handleLinkClick('contact-section')}
            >
              Contact |
            </Link>
          </li>
        </ul>
        <button className="darkmode" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <img
          className="lightbulb"
          src={bulbImg}
          alt="lightbulb"
          onClick={toggleDarkMode}
        />
      </div>
    </nav>
  );
};

export default Navigation;
