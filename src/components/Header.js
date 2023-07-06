import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "I'm a full-stack web developer.";

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;

    const typeText = () => {
      setTypedText(fullText.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > fullText.length) {
        clearInterval(typingInterval);
      }
    };

    typingInterval = setInterval(typeText, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const handleReadMoreClick = () => {
    const aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="center-container">
        <div class="text-container">
          <h1>Alexander Wiklöw</h1>
        </div>
        <div className="name">
          {/* <h1>
            Hi! I'm <span className="name-highlight">Alexander Wiklöw</span>
          </h1> */}

          <h2>{typedText}</h2>
          <div className="wrap">
            <button onClick={handleReadMoreClick} className="button">
              Read More
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
