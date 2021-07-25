import axios from 'axios';
const api = axios.create({
    baseURL: 'https://api-produtos-moak.herokuapp.com'
})

export default api;
