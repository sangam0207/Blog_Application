import { axiosPublic } from "../api/axios";

export const getPosts=async()=>{
    return axiosPublic.get('/getAll')
}
export const signup = async (payload) => {
    return axiosPublic.post("/register", payload);
  };
  
export const login=async(payload)=>{
    return axiosPublic.post('/login',payload)
}