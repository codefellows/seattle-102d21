'use strict'

let today = new Date();
// Wed Nov 11 2020 16:35:31 GMT-0600 (Central Standard Time)
// today = Wed Nov 11 2020 16:35:31 GMT-0600 (Central Standard Time)
let hourNow = today.getHours(); 
// hourNow = 16

let greeting;

if (hourNow > 18) {
  greeting = 'Good evening, Class!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon, Class!';
} else if (hourNow >= 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
