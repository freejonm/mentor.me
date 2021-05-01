// imports users generated from random user API
const users = require('./userAPI.json');
const fs = require('fs');

//intialize array for filtered dummy users
let filtered = [];

// loops through each dummy user
users.forEach(user => {
    
    let obj = {};

    // function to generate random numbers for several purposes in generating somewhat unique users
    function random(num) {
        return Math.floor(Math.random() * num);
    };

    //initializes random number from 0 to 100 to determine what details mentee user will have if this user is a mentee
    const rnd = random(100);

    //initializes a random number from 10 to 30 to to indicate the number of years experience of mentor will have
    const years = random(20) + 10;

    // starts seeding data from random user API into an empty object
    obj.profilePicture = user[0].picture.thumbnail;
    obj.firstName = user[0].name.first;
    obj.lastName = user[0].name.last;

    // sets pronouns based on gender from random user API
    if (user[0].gender === "female") {
        obj.pronouns = "she/her";
    } else if (user[0].gender === "male") {
        obj.pronouns = "he/him";
    } else {
        obj.pronouns = "they/them";
    }

    obj.location = `${user[0].location.city}, ${user[0].location.state}, ${user[0].location.country}`;
    obj.email = user[0].email;
    obj.password = user[0].login.password;
    obj.meetingsAttended = random(10);


    // creates a random number from 0 to 100 and if the number is less than 80 then the user will be a mentee otherwise they will be a mentor
    //this to try and create about a 5:1 ratio of mentors to mentees
    if (random(100) < 80) {
        obj.mentee = true;
        // uses the rnd variable initialized earlier in the loop to determine some minor details of a user to give make kind of unique
        // there is about 1/3 chance of user having one of these descriptions
        if (rnd > 66) {
            obj.description = "Bootcamp Graduate with a background in engineering looking for career guidance to leverage both of these passion";
            obj.desire = "looking for a job";
            obj.gradyear = 2021;
            obj.isLookingForMentor = true;
            obj.education = "UNC Coding Bootcamp";
            obj.hoursSpentWithMentor = random(15);
            obj.lookingForHelpWith = ["Python", "C", "C#", "Java", "Angular", "SEO", "AEM", "ASP.NET", "Data Structures"];
            obj.currentPosition = "Civil Engineer";
            obj.fieldOfInterest = "Web Development";
        } else if (rnd > 33 && rnd < 66 ) {
            obj.description = "Graduated a web development bootcamp and have no experience in the field and am looking for guidance into my new career";
            obj.desire = "looking for a job";
            obj.gradyear = 2021;
            obj.isLookingForMentor = true;
            obj.education = "UNC Coding Bootcamp";
            obj.hoursSpentWithMentor = random(15);
            obj.lookingForHelpWith = [ "JavaScript", "React", "TypeScript", "CSS"];
            obj.currentPosition = "Store ";
            obj.fieldOfInterest = "Web Development";
        } else {
            obj.description = "Looking to advance my career in the field of web development and need a mentor to help me on this path";
            obj.desire = "looking to advance my career";
            obj.gradyear = 2019;
            obj.isLookingForMentor = true;
            obj.education = "UNC Coding Bootcamp";
            obj.hoursSpentWithMentor = random(15);
            obj.lookingForHelpWith = ["Python", "C", "WordPress", "ASP.NET", "Data Structures", "Alogrithms", "Management"];
            obj.currentPosition = "Developer";
            obj.fieldOfInterest = "Web Development";
        };
    } else {
        obj.mentor = true
        obj.description = `Software Engineer with ${years} years experience in the field`;
        obj.gradYear = 2021 - years;
        obj.desire = "To help young and old web developers advance in their skill sets and their careers";
        obj.yearsExperience = years,
        obj.isLookingForMentee = true;
        obj.hoursSpentWithMentees = random(50);
        obj.hoursSpentThisWeek = random(20);
        obj.menteesAssigned = random(4);
        obj.hasExperienceIn = ["JavaScript", "TypeScript", "CSS", "HTML", "SCSS"];
        obj.currentPosition = "Developer";
        obj.education = "UNC Coding Bootcamp";  
    }

    filtered.push(obj);
});

console.log(filtered);
const filteredJSON = JSON.stringify(filtered);
const string = `const users = ${filteredJSON}; \n module.exports = users;`;
fs.writeFileSync('filteredUsers.js', string);

