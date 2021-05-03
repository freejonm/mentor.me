const users = require('../../randomUserGenerator/filteredUsers');
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mentor-me-auth"    
);

let mentees = [];

users.map(user => {
    if (user.mentee === true) {
        mentees.push(user);
    }
});

db.Mentee
    .remove({})
    .then(() => db.Mentee.collection.insertMany(mentees))
    .then(data => {
        console.log(data.result.n + " mentees inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })