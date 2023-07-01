import React, { useState, useRef } from 'react';
import './navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  return (
    <nav
      id="nav-section"
      className={`navigation ${isMenuOpen ? 'open' : ''}`}
      ref={navbarRef}
    >
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
            <a
              href="#about-section"
              onClick={() => handleLinkClick('about-section')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#education-section"
              onClick={() => handleLinkClick('education-section')}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects-section"
              onClick={() => handleLinkClick('projects-section')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#recent-posts-section"
              onClick={() => handleLinkClick('recent-posts-section')}
            >
              Recent Posts
            </a>
          </li>
          <li>
            <a
              href="#contact-section"
              onClick={() => handleLinkClick('contact-section')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
