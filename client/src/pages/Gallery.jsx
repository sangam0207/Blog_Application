
import { useApi } from '../services/post.api';
import useQuery from '../hooks/useQuery';
import { toast } from 'sonner';
import {useNavigate} from 'react-router-dom'
const Gallery = () => {
  const { ownPost, deletePost } = useApi();
const navigate=useNavigate()
  const { data, isLoading, isError, error, refetch } = useQuery(ownPost, {
    onError: (error) => {
      toast.error(error?.message || 'Failed to fetch posts');
    }
  });

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      toast.success('Post deleted successfully');
      refetch();
    } catch (error) {
      toast.error(error?.message || 'Failed to delete post');
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center py-10 text-red-500">{error.message}</div>;
  }

  return (
    <div >
      <div className="bg-white bg-opacity-100 p-8 rounded-lg shadow-lg w-full h-screen">
        <h1 className="text-3xl font-bold mb-6 mt-12 text-gray-900 text-center">Gallery</h1>
        <div className="overflow-auto max-h-screen">
          <table className="min-w-full bg-white text-gray-900 border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-3 px-6 border-b border-gray-700 text-center">Title</th>
                <th className="py-3 px-6 border-b border-gray-700 text-center">Image</th>
                <th className="py-3 px-6 border-b border-gray-700 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.posts.map((post) => (
                <tr key={post._id} className="hover:bg-gray-200">
                  <td className="py-3 px-6 border-b border-gray-700 text-center">{post.title}</td>
                  <td className="py-3 px-6 border-b border-gray-700 text-center">
                    <img src={post.image} alt={post.title} className="h-20 w-20 object-cover mx-auto rounded" />
                  </td>
                  <td className="py-3 px-6 border-b border-gray-700 text-center">
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700"
                      onClick={() =>navigate(`/edit/${post._id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
