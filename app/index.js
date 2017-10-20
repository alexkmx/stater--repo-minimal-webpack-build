import request from 'superagent'; // ES6
import getData from './sayMyName.js';
// import darClick from './click.js';
// console.log( printInConsole('Killer') )
request
.get('https://randomuser.me/api/?results=50')
.then(getData)
  
