const getNotes = require('./utils.js');
const chalk = require('chalk');

const command = process.argv[2]

if(command === 'add') {
    console.log('Adding notes');
} else if (command === 'remove') {
    console.log('Removing notes')
}

