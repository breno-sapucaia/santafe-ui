import axios from 'axios';

const api = axios.create({
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    baseURL: process.env.REACT_APP_BACKEND_API
});

export default api

