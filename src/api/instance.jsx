import axios from 'axios';

const instance = axios.create({
    //BaseURL
    baseURL: "http://localhost:3001/"
});

export default instance;