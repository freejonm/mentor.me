const users = require('../../randomUserGenerator/filteredUsers');
const mongoose = require('mongoose');
const db = require('../models');

let mentors = [];

users.map(user => {
    if (user.mentor === true) {
        mentors.push(user);
    }
}); 

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mentor-me-auth"    
);

db.Mentor
    .remove({})
    .then(() => {
        db.Mentor.collection.insertMany(mentors);
    })
    .then(data => {
        console.log(date.result.n + " mentors inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })