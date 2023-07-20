import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../blogData'; // Import the blogPosts data
import './blogPosts.css'; // Import the blogPosts.css file

const BlogPosts = () => {
  return (
    <div className="section blog-posts-section">
      <h1 id="recent-posts-section">Recent Posts</h1>
      <div className="blog-posts-container">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="card-link">
            <div className="card">
              <p className="card-title">{post.title}</p>
              <p className="card-info">{`${post.date} by ${post.author}`}</p>
              <p className="card-content">{truncateText(post.content)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Function to truncate the content text
const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

export default BlogPosts;
