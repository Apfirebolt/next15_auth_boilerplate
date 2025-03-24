import axios from 'axios';

const axiosInstance = axios.create({
    // for dev
    // baseURL: 'http://localhost:3000/api/'
    // for production
    baseURL: 'https://next15-auth-boilerplate.vercel.app/api/'
});

export default axiosInstance;