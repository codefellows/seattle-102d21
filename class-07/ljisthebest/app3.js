'use strict'

let today = new Date();
let hourNow = today.getHours();

let greeting;

if (hourNow > 18) {
  greeting = 'It is a good night for watching TLJ';
} else if (hourNow > 12) {
  greeting = 'It is a good afternoon to watch TLJ';
} else if (hourNow >= 0) {
  greeting = 'It is a good morning to watch TLJ!';
} else {
  greeting = 'TLJ is the BEST!';
}

document.write('<h3>' + greeting + '</h3>');