import axios from "axios";

export default {
  createMentor: function(userData) {
    return axios.post('api/mentor', userData);
  },
  createMentee: function(userData) {
    return axios.post('api/mentee', userData);
  },
  getAllUsers: function() {
    return axios.get('api/users');
  },
  getMentors: function() {
    return axios.get('api/mentor')
  },
  getMentees: function() {
    return axios.get('api/mentee')
  },
  getUserByID: function(id) {
    return axios.get('/api/users/' + id)
  },
  getConnections: (id) => {
    return axios.get('/api/users/connections/' + id)
  },
  getMatches: (id) => {
    return axios.get('/api/mentor/' + id)
  },
  updateUser: (id) => {
    return axios.put('/api/users/' + id)
  },
  getUsersByFirstName: (userName) => {
    return axios.get('/api/users/firstname', {
      params: {
        firstName: userName.firstName
      }
    })
  },
  getUsersByFullName: (userName) => {
    return axios.get('/api/users/fullname', {
      params: {
        firstName: userName.firstName,
        lastName: userName.lastName
      }
    })
  },
   createPost: (feed) => {
     return axios.post('/api/messageboard', feed)
   },
   getAllPosts: () => {
     return axios.get('api/messageboard')
   }
};
