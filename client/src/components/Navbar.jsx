import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export const Navbar = () => {
    const { token } = useAuth();

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    Blog-App
                </div>
                <div className="flex space-x-4">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-red-600 font-bold" : "text-white"}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-600  font-bold" : "text-white"}>About</NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-red-600  font-bold" : "text-white"}>Blogs</NavLink>
                    {token ? (
                        <NavLink to="/profile" className={({ isActive }) => isActive ? "text-red-600  font-bold" : "text-white"}>Profile</NavLink>
                    ) : (
                        <NavLink to="/login" className={({ isActive }) => isActive ? "text-red-600  font-bold" : "text-white"}>Login</NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};
