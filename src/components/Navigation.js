import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (sectionId) => {
    setIsMenuOpen(false);
  };

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
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
