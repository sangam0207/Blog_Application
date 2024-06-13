import React from 'react';
import { getPosts } from '../services/user.api';
import useQuery from '../hooks/useQuery';

const Blogs = () => {
  const { data } = useQuery(getPosts);
  console.log(data);

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <h1 className="text-4xl font-bold text-center mb-8 mt-6 text-indigo-600">All Available Blogs</h1>
      {data && data.data && data.data.posts && data.data.posts.length > 0 ? (
        data.data.posts.map((blog) => (
          <div 
            key={blog.title} 
            className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8 transform transition-transform duration-300 hover:scale-105"
          >
            <img className="w-full h-64 object-cover" src={blog.image} alt={blog.title} />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{blog.title}</h2>
              <p className="text-gray-700 mb-6">{blog.content}</p>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full mr-4 border-2 border-gray-300"
                  src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png"
                  alt="Author"
                />
                <div className="text-sm">
                  <p className="text-gray-900 font-semibold">{blog.user.name}</p>
                  <p className="text-gray-600">{`Posted at: ${new Date(blog.createdAt).toLocaleDateString()}`}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No blogs available</p>
      )}
    </div>
  );
};

export default Blogs;
