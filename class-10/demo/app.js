'use strict'

console.log('hello world');
let name = 'Roger'

function printH1(){
    document.write('<h1>' + 'This is my H1 on my index!' + '</h1>')
}

// Will not run
// addPicture1()

function addPicture1(potatoe){
    let numberPictures = prompt('How many pictures to display?');
    // want to use a for loop
    for(let i = 0; i < numberPictures; i++){
        console.log('The value of i is : ' + i);
    document.write('<img src="' + potatoe + '">');
    }
}

function addPicture(){
    let url1 = "https://i.etsystatic.com/7939429/r/il/e74e39/2324926878/il_794xN.2324926878_8pa7.jpg";
    let url2 = "https://www.denofgeek.com/wp-content/uploads/2015/05/star-trek-original-crew-star-trek-the-movies-10920795-1000-715.jpg"
    let sw = prompt('Do you like sw or st?')
    console.log(sw);
    if (sw == 'sw'){
        addPicture1(url1);
    } else {
        addPicture1(url2);
    }
}

(true && true) = true

(true || false) = true

(false || false) = false

(true && false) = false

true 
'true'