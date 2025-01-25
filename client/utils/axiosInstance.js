import axios from "axios";

// Axios Interceptor Instance
const AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL // 'http://localhost:4300'    // || // process.env.BASE_URL
});

export default AxiosInstance;