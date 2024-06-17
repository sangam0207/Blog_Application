import { createContext, useState, useEffect, useContext } from 'react';
import { axiosPublic } from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
     console.log(token)
    useEffect(() => {
        const refreshToken = async () => {
            try {
                const res = await axiosPublic.get('/refresh');
                const newToken = res.data.accessToken;
                setToken(newToken);
            } catch (error) {
                console.error('Error refreshing token:', error);
            }
        };
        refreshToken();
    }, []);

    return (
        <AuthContext.Provider value={{token,setToken}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
