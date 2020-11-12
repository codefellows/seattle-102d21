'use strict'

function askUserName(){
    let userName = prompt('Please enter your name?');

    if (userName == 'Roger'){
        document.write('Welcome Lord ' + userName);
    } else {
        document.write('<h2>' + 'Welcome ' + userName + '</h2>');
        document.write('<img src="https://www.starwars.com/luke.jpg">')
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
    let userNumber = prompt('please enter a letter');
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

// create a user number guessing game

// while loop
// answer
// prompt for the user
// how many guesses


function guessingGame(){
    let correctAnswer = 34;
    let numberOfGuesses = 3;
    //                                  i++
    for (let i = 0; i < numberOfGuesses; i = i + 1){
        let userAnswer = prompt('Please Enter a Number 1-100: ');
        if(userAnswer > 0 && userAnswer < 101){
            if(userAnswer == correctAnswer){
                alert('Correct Answer')
                break;
                // or I could reassing i = 3
            } else {
                alert('Sorry, Wrong Answer!')
            }
        } else {
            alert('Invalid answer')
        }
    }
}

function askToPlay(){
    let wannaPlay = prompt('Do you want to play a guessing game? (yes or no)')
    while(wannaPlay == 'yes'){
        guessingGame();
        wannaPlay = prompt('Do you want to play again (yes or no)');
    }
}

askToPlay();