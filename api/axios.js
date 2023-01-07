
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3000';
axios.interceptors.request.use(function(config){
    return config
});

export default axios;