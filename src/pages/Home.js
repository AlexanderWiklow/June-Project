import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import About from '../components/About';
// import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import BlogPosts from '../components/BlogPosts';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />

      <About />
      <Education />
      {/* <Experience /> */}
      <Projects />
      <BlogPosts />
      <Contact />
    </div>
  );
};

export default Home;
