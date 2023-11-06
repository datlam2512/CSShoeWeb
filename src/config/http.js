import axios from "axios";

export const http = axios.create({
    baseURL: process.env.REACT_APP_HOST_API,
    timeout: 30000,
});

