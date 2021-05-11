const fetch = require('node-fetch');
const fs = require('fs');
const inquirer = require('inquirer');
const bcrypt = require('bcryptjs')

inquirer.prompt([
    {
        type: "input",
        name: "numUsers",
        message: "how many random users do you want?"
    }
]).then(val => {
    call(val.numUsers);
});

const hashPassword = (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
}

async function call(num) {
    
   let userArr = [];
        
    for (let i = 0; i < num; i++) {
        
        let response = await fetch(`https://randomuser.me/api/`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })

        let user = await response.json();
        // console.log(user)
        let unHashedPassword = user.results[0].login.password
        let hashedPassword = hashPassword(user.results[0].login.password);
        user.results[0].login.password = hashedPassword;
        user.results[0].login.unhashedPassword = unHashedPassword;

        userArr.push(user.results);
    }

    fs.writeFileSync('userApi.json', JSON.stringify(userArr));

    setTimeout(()=>console.log('success!'), 1000);
};