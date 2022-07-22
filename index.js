// generating random numbers in the range 1-6
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

// Changing the dice images corresponding to its random number from 1-6
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

// if dice 1 is greater than dice 2, player 1 wins
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}

// if dice 2 is greater than dice 1, player 2 wins
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 2 wins!";
}

// if both dices are equal, its a draw
else{
    document.querySelector("h1").innerHTML="It's a Draw!";
}
