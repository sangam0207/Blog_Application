import { axiosPublic } from '../api/axios';
import { useAuth } from '../context/authContext';
const useRefreshToken=()=>{
  const{setToken}=useAuth()
  const refresh=async()=>{
    const response=await axiosPublic.get('/refresh-token',{
        withCredentials:true
    });
    setToken(response.data.token);

return response.data.token;
  }  
  return refresh;
}
export default useRefreshToken