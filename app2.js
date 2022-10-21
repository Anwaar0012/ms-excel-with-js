const fs = require('fs');
const data2 = fs.readFile('data.json');
let mybook = data2.forEach(element => {
    return element;
});
console.log(mybook)