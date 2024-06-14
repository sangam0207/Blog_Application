
import useAxiosWithTokenRefresh from "../hooks/useAxiosWithTokenRefresh";

export const useApi = () => {
  const axiosPrivate = useAxiosWithTokenRefresh();
  const createPost = async (payload) => {
    return axiosPrivate.post("/create", payload);
  };

  const ownPost = async () => {
    const response = await axiosPrivate.get('/getOwnPosts');
    return response.data;
  };

  const deletePost = async (params) => {
    return axiosPrivate.delete(`/deletePost/${params}`);
  };
  const getSinglePost=async(params)=>{
    return axiosPrivate.get(`/getPostById/${params}`)
  }

  const editPost = async (payload) => {
    console.log("Editing post with payload:", payload, "and params:", payload.postId);
    return axiosPrivate.put(`/updatePost/${payload.postId}`, payload);
  };
  return {                               
    createPost,
    ownPost,
    deletePost,
    editPost,
    getSinglePost
  };
};
