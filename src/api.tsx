import axios from 'axios';

const api = axios.create({
    baseURL: "https://movie-sagas-api.herokuapp.com",
})

export default api;