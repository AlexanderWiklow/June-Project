import React from 'react';
import './about.css';

const About = () => {
  return (
    <div id="about-section" className="about-section section">
      <h2>About</h2>
      <div className="section-content">
        <div>
          <p>
            My name is Alexander Wiklöw, and I am a Fullstack Web Developer with
            a passion for creating innovative and user-friendly web
            applications. With a strong educational background and extensive
            hands-on experience, I am equipped with the skills and knowledge
            necessary to excel in the field.
          </p>
          <p>
            Education: I pursued my education at Nackademien, where I completed
            the Webbutveckling Fullstack Open Source program. This comprehensive
            program provided me with a solid foundation in web development,
            covering both frontend and backend technologies. Additionally, I
            obtained a Bachelor's degree in Humaniora, specializing in the
            Chinese language, from Stockholms Universitet. During my studies, I
            had the opportunity to immerse myself in Chinese culture by
            attending South West University, Zhejiang University, and Changchun
            University.
          </p>
          <p>
            Skills: My technical skill set includes expertise in HTML, CSS,
            JavaScript, React, SQL, MySQL, NodeJS, ExpressJS, and the Microsoft
            Office suite. I am well-versed in frontend development, with a keen
            eye for design and user experience. Additionally, my proficiency in
            backend technologies allows me to create robust and scalable web
            applications.
          </p>
          <p>
            Work Experience: I have gained valuable work experience in various
            roles throughout my career. I worked as an Administrator at Yamaha
            Motor Sverige, where I honed my organizational and multitasking
            abilities. As an independent entrepreneur at Wiklow Trading &
            Consulting, I successfully managed my own business, demonstrating my
            strong entrepreneurial spirit and business acumen. I also worked as
            a Consultant at Academic Work, where I collaborated with diverse
            clients, further enhancing my problem-solving and communication
            skills.
          </p>
          <p>
            Achievements: One of my notable achievements was receiving a
            scholarship from the Chinese government, which enabled me to live in
            China for a year and study the language and culture. This experience
            not only broadened my horizons but also deepened my understanding of
            cross-cultural communication.
          </p>
        </div>
        {/* <div>
          <p>
            Contact: Feel free to reach out to me, visit{' '}
            <a
              href="https://alexanderwiklow.github.io/Portfolio2023/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://alexanderwiklow.github.io/Portfolio2023/
            </a>
            . I am enthusiastic about leveraging my skills and experience to
            contribute to dynamic web development projects. Let's collaborate
            and create impactful digital experiences together.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
