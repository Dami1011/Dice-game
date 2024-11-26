var images = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

function dice(){
  return Math.floor(Math.random() * 6)+ 1;
}

function rollDice(){
  var dice1 = dice();
  var dice2 = dice();

  if (dice1 < dice2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
  }else if (dice1 === dice2){
    document.querySelector("h1").innerHTML="Draw";
  }else {
    document.querySelector("h1").innerHTML="Player 1 Wins";
  }

  var num1 =images[dice1 -1];
  var num2 = images[dice2 -1];

var diceImage = document.querySelectorAll(".dice img");

if (diceImage.length >= 2){
  diceImage[0].src = num1;
  diceImage[1].src = num2;

}

}
window.onload=rollDice;