
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //this gives us the dice number from 1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png";     //dice1 images 
var randomImageSourcee = "images/" + randomDiceImage;

var image1 = document.querySelecrorAll("img")[0];

image1.setAttribute("src", randomImageSourcee);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// PLAYERS 1 WINS THE GAME
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelectors("h1").innerHTML = "🚩 Plyer 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}
