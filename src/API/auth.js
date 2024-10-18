import axios from 'axios';


const API_URL = 'https://api.freeapi.app/api/v1';


const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const signup = async ({ username, email, password }) => {
    try {
        const response = await instance.post('/users/signup', { username, email, password });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const login = async ({ email, password }) => {
    try {
        const response = await instance.post('/users/login', { email, password });
        
    
        console.log('Login response:', response.data); 
        return response.data; 
    } catch (error) {
        console.error('Login API error:', error.response?.data || error.message); 
        throw error.response?.data || error.message;
    }
};



export const refreshToken = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        
        
        const response = await instance.post('/refresh-token', { refreshToken });
        const { accessToken, refreshToken: newRefreshToken } = response.data;

    
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', newRefreshToken);
        
        return { accessToken, newRefreshToken };
    } catch (error) {
        throw error.response?.data || error.message;
    }
};


export const logout = async () => {
    try {
        await instance.post('/users/logout');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    } catch (error) {
        throw error.response?.data || error.message;
    }
};


export default instance;
