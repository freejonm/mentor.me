import axios from "axios";

export default {
  // Gets user info
  getUser: function() {
    return axios.get('/auth/user');
  },
  // Logs the user out
  logout: function() {
    return axios.post('/auth/logout');
  },
  // Log the user in
  login: function(username, password) {
    return axios.post('/auth/login', { username, password });
  },
  // New user registration
  signup: function(userData) {
    console.log(userData)
    return axios.post('/auth/signup', userData);
  }
};
