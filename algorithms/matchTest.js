const users = require("../randomUserGenerator/filteredUsers");
const rankAndSort = require('./match')

const mentee = users[0];
let mentors = [];


for (let i = 0; i < users.length; i++) {
  if (users[i].mentorStatus === true) {
    mentors.push(users[i]);
  } 
};

console.log(mentors)
rankAndSort(mentee, mentors)

mentors.map((mentor, i) => {
    console.log(`${mentor.firstName} is ranked ${i + 1}`)
});