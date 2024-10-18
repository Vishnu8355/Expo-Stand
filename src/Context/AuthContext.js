import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as apiLogin, refreshToken as apiRefreshToken, logout as apiLogout } from '../API/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ token: null, refreshToken: null, user: null });
    const [user, setUser] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        
        const savedAuth = JSON.parse(localStorage.getItem('auth'));
        if (savedAuth && savedAuth.user) {
            setUser(savedAuth.user); 
            setAuth(savedAuth); 
        }
    }, []);

    const login = async ({ email, password }) => {
        try {
            const response = await apiLogin({ email, password });
            const { accessToken, refreshToken, user } = response;

            
            localStorage.setItem('auth', JSON.stringify({ token: accessToken, refreshToken, user }));
            setAuth({ token: accessToken, refreshToken, user });
            setUser(user);

            return true; 
        } catch (error) {
            console.error('Login failed:', error);
            return false; 
        }
    };

    const refreshAuthToken = async () => {
        try {
            const { accessToken, newRefreshToken } = await apiRefreshToken();
            const updatedAuth = { ...auth, token: accessToken, refreshToken: newRefreshToken };

            
            localStorage.setItem('auth', JSON.stringify(updatedAuth));
            setAuth(updatedAuth);
        } catch (error) {
            console.error("Failed to refresh token:", error);
            logout();
        }
    };

    const logout = async () => {
        try {
            await apiLogout();
            setUser(null); 
            setAuth({ token: null, refreshToken: null, user: null }); 
            localStorage.removeItem('auth');
            navigate('/login'); 
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ auth, user, login, logout, refreshAuthToken }}>
            {children}
        </AuthContext.Provider>
    );
};
