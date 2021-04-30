const fetch = require('node-fetch');
const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: "input",
        name: "numUsers",
        message: "how many random users do you want?"
    }
]).then(val => {
    call(val.numUsers);
})

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
        userArr.push(user.results);
    }

    fs.writeFileSync('userApi.json', JSON.stringify(userArr));

    setTimeout(()=>console.log('success!'), 1000);
};