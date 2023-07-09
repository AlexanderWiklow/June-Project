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
      title: 'Nackademin - Fullstack Web Development Open Source - 2 years',
      description: 'Fullstack Web Development Open Source',
      link: 'https://nackademin.se/utbildningar/webbutvecklare-fullstack-open-source/',
    },
    {
      id: 2,
      title: 'Lexicon - Programming/System Development - 6 months',
      description: 'Programming/System Development',
      date: '2022-2024',
    },
    {
      id: 3,
      title: 'Hermods - Programming 1 & Web Development 1 - 6 months',
      description: 'C#, HTML, CSS, Javascript',
      date: '2021',
    },
    {
      id: 4,
      title:
        'Stockholm University - Bachelor Degree Humanities (Mandarin Chinese) - 3 years',
      description: 'Spoken and written Mandarin Chinese',
      date: '2009-2016',
    },
    {
      id: 5,
      title: 'South West University, Chongqing - 1 year',
      description: 'Attended as part of Chinese language studies',
    },
    {
      id: 6,
      title: 'Zhejiang University, Zhejiang',
      description: 'Attended as part of Chinese language studies',
    },
    {
      id: 7,
      title: 'Changchun University, Changchun - 6 months',
      description: 'Attended as part of Chinese language studies',
    },
    {
      id: 8,
      title: 'Export Academy - 2 years',
      description: 'Export salesperson, focus on China',
      date: '2009-2016',
    },
  ];

  return (
    <div id="education-section" className="education-section section">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((item, index) => {
          const isActive = selectedItem === index;
          return (
            <div
              key={item.id}
              className={`education-item ${isActive ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <h3>
                {item.title}{' '}
                <span className={`arrow ${isActive ? 'down' : ''}`}>➜</span>
              </h3>

              {item.date && <p>{item.date}</p>}
              {isActive && (
                <>
                  <p>{item.description}</p>
                  {item.courses && (
                    <>
                      <h4>Courses:</h4>
                      <ul>
                        {Object.keys(item.courses).map((course, index) => (
                          <li key={index}>
                            <strong>{course}</strong>
                            <p>{item.courses[course]}</p>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {item.link && (
                    <p>
                      Learn more:{' '}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.link}
                      </a>
                    </p>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
