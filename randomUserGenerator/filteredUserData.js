const users = require('./userAPI.json');
const fs = require('fs');

let filtered = [];

users.forEach(user => {
    
    let obj = {};

    function random(num) {
        return Math.floor(Math.random() * num);
    };

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


    if (random(100) < 75) {
        let mentee = {};
        if (random(100) > 66) {
            obj.description = "Bootcamp Graduate with a background in engineering looking for career guidance to leverage both of these passion";
            mentee.desire = "looking for a job";
            mentee.gradyear = 2021;
            mentee.isLookingForMentor = true;
            mentee.education = "UNC Coding Bootcamp";
            mentee.hoursSpentWithMentor = random(15);
            mentee.lookingForHelpWith = ["Python", "C", "C#", "Java", "Angular", "SEO", "AEM", "ASP.NET", "Data Structures"];
        } else if (random(100) > 33) {
            obj.description = "Graduated a web development bootcamp and have no experience in the field and am looking for guidance into my new career";
            mentee.desire = "looking for a job";
            mentee.gradyear = 2021;
            mentee.isLookingForMentor = true;
            mentee.education = "UNC Coding Bootcamp";
            mentee.hoursSpentWithMentor = random(15);
            mentee.lookingForHelpWith = [ "JavaScript", "React", "TypeScript", "CSS"];
        } else {
            obj.description = "Looking to advance my career in the fi eld of web development and need a mentor to help me on this path";
            mentee.desire = "looking to advance my career";
            mentee.gradyear = 2019;
            mentee.isLookingForMentor = true;
            mentee.education = "UNC Coding Bootcamp";
            mentee.hoursSpentWithMentor = random(15);
            mentee.lookingForHelpWith = ["Python", "C", "WordPress", "ASP.NET", "Data Structures", "Alogrithms", "Management"];
        };

        obj.mentee = mentee;
    } else {
        obj.description = `Software Engineer with ${years} years experience in the field`;
        obj.mentor = {
            yearsExperience: years,
            hoursSpentWithMentees: random(50),
            hoursSpentThisWeek: random(20),
            menteesAssigned: random(4),
            hourlyWage: 30,
            hasExperienceIn: ["JavaScript", "TypeScript", "CSS", "HTML", "SCSS"]
        }
    }

    filtered.push(obj);
});

console.log(filtered);
const filteredJSON = JSON.stringify(filtered);
const string = `const users = ${filteredJSON}; \n module.exports = users;`;
fs.writeFileSync('filteredUsers.js', string);

