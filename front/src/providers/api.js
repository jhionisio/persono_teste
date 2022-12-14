import axios from "axios";

// Set config defaults when creating the instance
const api = axios.create({
    baseURL: 'http://localhost:3003'
  });
  
  // Alter defaults after instance has been created
  //.defaults.headers.common['Authorization'] = AUTH_TOKEN;

  export default api;