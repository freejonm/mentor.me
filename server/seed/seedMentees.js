const users = require('../../randomUserGenerator/filteredUsers');
const mongoose = require('mongoose');
const db = require('../models');

let mentees = [];

users.map(user => {
    if (user.mentee) {
        mentees.push(user);
    }
});

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mentormeusers"    
);

db.Mentees
    .remove({})
    .then(() => {
        db.Mentees.collection.insertMany(mentees);
    })
    .then(data => {
        console.log(date.result.n + " mentees inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })