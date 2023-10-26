import axios from 'axios';

export const loginUser = async (username, password) => {
  const response = await axios.post(
    'http://localhost:3001/users/authenticate',
    {Username: username, Password: password}
    );
    // const response = await axios.get('https://6538e61aa543859d1bb22827.mockapi.io/api/users');
    // return response.data.find(user => user.username === username && user.password === password);
  return response.data;
};