import axios from "axios"

axios.defaults.withCredentials = true;

export default axios;

/*
var token = "";

const instance = Axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 1000,
    headers: {
        'Authorization': "Bearer " + token,
        'Content-Type': 'json'
    }
});

export default instance;
*/