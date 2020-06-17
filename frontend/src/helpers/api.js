import axios from 'axios'

const api = axios.create({
    baseURL : process.env.REACT_APP_API_URL
})

api.interceptors.request.use(async config => {
    let usr = JSON.parse(localStorage.getItem('users')) || [];
     if (usr.token) {
        config.headers.Authorization = `Bearer ${usr.token}`;
    }
    return config;
  });
  
  export default api;