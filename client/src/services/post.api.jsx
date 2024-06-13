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
  return {
    createPost,
    ownPost,
    deletePost
  };
};
