import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../blogData';
import './blogPost.css';

const BlogPost = () => {
  const { id } = useParams();

  // Find the blog post that matches the ID
  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  // Filter out the current blog post from the list
  const otherPosts = blogPosts.filter((post) => post.id !== parseInt(id));

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <Link to="/" className="home-link">
          Home
        </Link>
        <h2 className="blog-post-title">
          {blogPost ? blogPost.title : 'Blog Post Not Found'}
        </h2>
        <p>{blogPost && blogPost.date}</p>
        {blogPost && (
          <div className="blog-post-content">
            <p>{blogPost.content}</p>
            <p>{blogPost.author}</p>
          </div>
        )}
      </div>

      <div className="other-posts">
        <h3>More Posts</h3>
        <div className="other-posts-list">
          {otherPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="other-post">
              <h4>{post.title}</h4>
              <p>
                By {post.author} - {post.date}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
