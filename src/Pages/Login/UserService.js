import axios from 'axios';

const loginApi = ( username, password) => {
    return axios.post("/api/login", { username, password});
}
export { loginApi };