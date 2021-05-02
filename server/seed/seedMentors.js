const users = require('../../randomUserGenerator/filteredUsers');
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mentor-me-auth"    
);
let mentors = [];

users.map(user => {
    if (user.mentor === true) {
        mentors.push(user);
    }
}); 


db.Mentor
    .remove({})
    .then(() => db.Mentor.collection.insertMany(mentors))
    .then(data => {
        console.log(data.result.n + " mentors inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })