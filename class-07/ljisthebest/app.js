'use strict'

function askUserName(){
    let userName = prompt('Please enter your name?');

    if (userName == 'Roger'){
        document.write('Welcome Lord ' + userName);
    } else {
        document.write('Welcome ' + userName);
    }
}

function askWhatever(){
    let ownDog = prompt('Do you own a dog?');
}

function goodMovie(){
    let movieConfirm = confirm('Is the last Jedi the best?');

    if (movieConfirm){
        document.write('Someone has a good head on their shoulders')
    } else {
        document.write('Someone needs to re-watch TLJ again and again');
    }
}

function timeGreeting(){
    let today = new Date();
    let hourNow = today.getHours();
    
    let greeting;
    
    if (hourNow > 18) {
      greeting = 'It is a good night for watching TLJ';
    } else if (hourNow >= 12) {
      greeting = 'It is a good afternoon to watch TLJ';
    } else if (hourNow >= 0) {
      greeting = 'It is a good morning to watch TLJ!';
    } else {
      greeting = 'TLJ is the BEST!';
    }
    
    document.write('<h3>' + greeting + '</h3>');
}

// askUserName();
// goodMovie();
// timeGreeting();


function getNumber(){
    let userNumber = prompt('please enter a number');
    return userNumber;
}

// console.log(userNumber);

let getUserNumberFromFunction = getNumber();

function addNumber(number1){
    number1 = number1 + 3;
    console.log(number1);
}

addNumber(5);

console.log(getUserNumberFromFunction);