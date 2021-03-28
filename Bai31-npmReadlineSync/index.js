var readlineSync = require('readline-sync');

// var userName = readlineSync.question('What your name ? ');
// console.log('Hi '+ userName+ ' <3');

var languages = [];
var language = readlineSync.question('What is your mother language ?: ');
languages.push(language);

console.log(languages);