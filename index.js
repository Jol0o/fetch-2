const fs = require('fs');
const fetch = require('node-fetch');

const url = 'https://poshmark.com/vm-rest/users/64126b0e307ba9255ab13060/posts?exp=all&base_exp=all&app_version=2.55&summarize=true&count=11&pm_version=2023.37.0';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        fs.writeFileSync('response2.json', JSON.stringify(data, null, 2));
    })
    .catch(error => {
        console.error('Error fetching or saving data:', error);
    });

