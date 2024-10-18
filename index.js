var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImg ;
var image1 = document.querySelectorAll("img");
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImg2 ;
var image2 = document.querySelectorAll("img");
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins !";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩 !";
}
else{
    document.querySelector("h1").innerHTML = "It is a Draw !";
}
