import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-produtos-moak.herokuapp.com' //process.env.REACT_APP_API_URL
});

export default api;
