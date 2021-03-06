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
  getMatches: (userData) => {
    return axios.put("/api/mentor/", userData);
  },
  updateUser: (userData) => {
    return axios.put('/api/users/', userData)
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
   },

  sendMentorRequest: (id) => {
    return axios.put('/api/connections/request/' + id)
  },
  approveMentorRequest: (id, userData) => {
    return axios.put('/api/connections/approve/' + id, userData)
  }
   
};
