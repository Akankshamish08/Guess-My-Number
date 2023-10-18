let guess=document.querySelector(".guess");
let checkButton=document.querySelector(".btn-check");
let message=document.querySelector(".message");
let score=document.getElementsByClassName("score")[0];
let highscore=document.querySelector(".highscore");
let Questionmark=document.querySelector(".number");
let number=document.querySelector(".again");
let randomNumber=Math.trunc(Math.random()*50)+1;  //change the decimal value in number like 2.2=2
console.log("Random NUmber", randomNumber);
let scores =20;
function checkNumber(){
    let guessValue = Number(guess.value);
    if(guessValue === randomNumber){
        console.log("Correct Number");
        message.textContent="Correct Number !"
        document.querySelector("body").style.backgroundColor="green";
        highscore.textContent=scores;
        Questionmark.textContent=randomNumber;
    }else if(guessValue < randomNumber){
        if(scores>0){
        message.textContent="too low !!"
        scores--;
        score.textContent=scores;
    }
    else{
        console.log("You have lost the Game..");
        document.querySelector("body").style.backgroundColor="red";
    }
    
    }else{
        if(scores>0){
        message.textContent="too high!";
        scores--;
        score.textContent=scores;
    }else{
        console.log("You have lost the Game..");
        document.querySelector("body").style.backgroundColor="red";
        
    }
    }

}
checkButton.addEventListener("click",checkNumber);
function resetgame(){
   scores=20;
   score.textContent= scores;
   message.textContent="Start Guessing..";
   Questionmark.textContent="?";
  document.querySelector("body").style.backgroundColor="#222";
  highscore.textContent=0;
  guess.value= '';
  randomNumber=Math.trunc(Math.random()*20)+1;
  console.log("Random Number",randomNumber);
}
number.addEventListener("click",resetgame);