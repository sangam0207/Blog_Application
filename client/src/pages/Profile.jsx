
import { useAuth } from "../context/authContext"
const Profile = () => {
  const{userInfo}=useAuth()
  return (
    <div className="text-center mt-24  font-bold">
      <h1 className="text-3xl text-gray-600">Welcome to your Profile</h1>
      <h1 className="text-gray-500 pt-4 text-2xl">{userInfo.name}</h1>
      <p className="text-gray-500 pt-4 text-2xl">{userInfo.email}</p>
    </div>
  )
}

export default Profile