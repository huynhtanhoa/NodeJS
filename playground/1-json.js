const fs = require('fs');
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }
//
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');  // read the file and get binary data
// const dataJSON = dataBuffer.toString();    // convert data into String in Javascript
// const data = JSON.parse(dataJSON);        // parse JSON data into object
// console.log(data.title);                 // access the property


// 1 load and parse json data
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

// 2 change the name and age
data.name = "Steven";
data.age = 30;

// 3 Stringify the changed object
const result = JSON.stringify(data);
fs.writeFileSync('1-json.json', result);

console.log(result);
