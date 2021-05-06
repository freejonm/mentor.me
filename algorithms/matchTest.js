const users = require("../randomUserGenerator/filteredUsers");
const rankAndSort = require('./match')

const mentee = users[0];
let mentors = [];

console.log(mentee)

for (let i = 0; i < users.length; i++) {
  if (users[i].mentor === true) {
    mentors.push(users[i]);
  } 
};

rankAndSort(mentee, mentors)

mentors.map((mentor, i) => {
    console.log(`${mentor.firstName} is ranked ${i + 1}`)
});