const users = require('../../randomUserGenerator/filteredUsers');
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mentor-me-auth"    
);

let userArray = [];

users.map(user => {
        userArray.push(user);
});

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userArray))
    .then(data => {
        console.log(data.result.n + " users inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })