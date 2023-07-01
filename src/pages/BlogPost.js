import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../blogData';

const BlogPost = () => {
  const { id } = useParams();

  // Find the blog post that matches the ID
  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  return (
    <div>
      <h2>{blogPost ? blogPost.title : 'Blog Post Not Found'}</h2>
      {/* Render the content of the blog post here */}
    </div>
  );
};

export default BlogPost;
