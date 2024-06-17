import { axiosPublic } from '../api/axios';
import { useAuth } from '../context/authContext';
const useRefreshToken=()=>{
  const{setToken,setUserInfo}=useAuth()
  const refresh=async()=>{
    const response=await axiosPublic.get('/refresh',{
        withCredentials:true
    });
    setToken(response.data.accessToken);
    setUserInfo(response.data.user)
    set
return response.data.accessToken;
  }  
  return refresh;
}
export default useRefreshToken;