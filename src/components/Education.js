import React, { useState } from 'react';
import './education.css';

const Education = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const educationData = [
    {
      id: 1,
      title: 'School 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'School 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      title: 'School 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div className="education-section" id="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((item, index) => (
          <div
            key={item.id}
            className={`education-item ${
              selectedItem === index ? 'active' : ''
            }`}
            onClick={() => handleClick(index)}
          >
            <h3>{item.title}</h3>
            {selectedItem === index && <p>{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
