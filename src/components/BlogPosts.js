import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../blogData'; // Import the blogPosts data

const BlogPosts = () => {
  return (
    <div>
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
