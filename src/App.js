import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  HashRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';

const App = () => {
  return (
    <HashRouter basename="/">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </HashRouter>
  );
};

export default App;
