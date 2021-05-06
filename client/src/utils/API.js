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
  }
};
