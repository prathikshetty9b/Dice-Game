
// Random Number Generation 1 - 6
var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

//random dice image
var randomDiceImage1 = "/images/Dice-" + randomNumber1 + ".PNG"
var randomDiceImage2 = "/images/Dice-" + randomNumber2 + ".PNG"


//Setting Source to image tags
document.querySelector("#img1").setAttribute("src",randomDiceImage1);
document.querySelector("#img2").setAttribute("src",randomDiceImage2);


// Dynamic Title
if(randomNumber1 > randomNumber2)
{
    document.querySelector("#title").textContent="Player 1 Wins";
}
else if(randomNumber1 == randomNumber2)
{
    document.querySelector("#title").textContent="It's a Tie";
}
else
{
    document.querySelector("#title").textContent="Player 2 Wins";
}