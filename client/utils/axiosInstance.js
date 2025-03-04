import axios from "axios";

// Axios Interceptor Instance
const AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL 
});

export default AxiosInstance;