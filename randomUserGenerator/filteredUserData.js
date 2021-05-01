const users = require('./userAPI.json');
const fs = require('fs');

let filtered = [];

users.forEach(user => {
    
    let obj = {};

    function random(num) {
        return Math.floor(Math.random() * num);
    };

    const rnd = random(100)
    const years = random(30);

    obj.profilePicture = user[0].picture.thumbnail;
    obj.firstName = user[0].name.first;
    obj.lastName = user[0].name.last;

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


    if (random(100) < 80) {
        obj.mentee = true;
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

