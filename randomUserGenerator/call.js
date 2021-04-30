const fetch = require('node-fetch');
const fs = require('fs');

async function call() {
    
   let userArr = []
        
    for (let i = 0; i < 20; i++) {
        
        let response = await fetch(`https://randomuser.me/api/`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let user = await response.json()
        userArr.push(user.results)
    }

    fs.writeFileSync('userApi.json', JSON.stringify(userArr))
    console.log('success')
}

call()