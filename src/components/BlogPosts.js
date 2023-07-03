import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../blogData'; // Import the blogPosts data
import './blogPosts.css'; // Import the blogPosts.css file

const BlogPosts = () => {
  return (
    <div className="section blog-posts-section">
      <h1 id="recent-posts-section">Recent Posts</h1>
      {blogPosts.map((post) => (
        <div key={post.id}>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
