import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5501/produtos'
});

export default api;