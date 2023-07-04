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
      title: 'Nackademien',
      description: 'Webbutveckling Fullstack Open Source',
      link: 'https://nackademin.se/utbildningar/webbutvecklare-fullstack-open-source/',
    },
    {
      id: 2,
      title: 'Lexicon',
      description: 'Programmering/Systemutveckling',
      date: '2022-2024',
    },
    {
      id: 3,
      title: 'Hermods',
      description: 'Stockholm Programmering 1 & Webbutveckling 1',
      date: '2021',
    },
    {
      id: 4,
      title: 'Stockholms Universitet',
      description: 'Bachelor/Kandidatexamen - Humaniora (Kinesiska Språket)',
      date: '2009-2016',
    },
    {
      id: 5,
      title: 'South West University, Chongqing',
      description: 'Attended as part of Chinese language studies',
    },
    {
      id: 6,
      title: 'Zhejiang University, Zhejiang',
      description: 'Attended as part of Chinese language studies',
    },
    {
      id: 7,
      title: 'Changchun University, Changchun',
      description: 'Attended as part of Chinese language studies',
    },
    {
      id: 8,
      title: 'Exportakademien',
      description: 'Exportförsäljare, inriktning Kina',
      date: '2009-2016',
    },
    {
      id: 9,
      title: 'Stockholm Yrkeshögskoleutbildning',
      description: 'Internationell försäljning med fokus på Kina',
      date: '2013-2015',
    },
  ];

  return (
    <div className="education-section section" id="education-section">
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
            {item.date && <p>{item.date}</p>}
            {selectedItem === index && (
              <>
                <p>{item.description}</p>
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
        ))}
      </div>
    </div>
  );
};

export default Education;
