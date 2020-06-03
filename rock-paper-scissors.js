// Global variables
let preliminarResult;


// 5 rounds game
function game(){
  let i;
  let finalResult = 0;
  for(i=0; i<5; i++){
let playerSelection = prompt("Write paper, rock or scissors");
let computerSelection = computerPlay();
alert(playRound(playerSelection,computerSelection));
finalResult = finalResult + preliminarResult;
  }
  if(finalResult >= 1){
    alert("You win the Game");
     }
  else if(finalResult == 0){
    alert("You draw the Game");
  }
else{alert("You loose the Game");}
}


// Computer decision
function computerPlay(){
  randomNumber(1, 3);
function randomNumber(min, max) {
R0 = Math.floor(Math.random() * (max - min + 1) + min);
}
if (R0 == 1){
return "rock";
}
else if (R0 == 2){
return "paper";
}
else{return "scissors";}
}


// 1 round game
function playRound(playerSelection,computerSelection){
 preliminarResult = 0;
  //Winnner configuration
  if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" ){
  preliminarResult = 1;
    return "You Win this round! Paper beats Rock";

   }
  else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" ){
   preliminarResult = 1;
    return "You Win this round! Rock beats Scissors";

   }
  else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper" ){
   preliminarResult = 1;
    return "You Win this round! Scissors beats Paper";
   }

  //Looser configuration
   else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors" ){
     preliminarResult = -1;
     return "You Lose this round! Scissors beats Paper";

   }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper" ){
     preliminarResult = -1;
      return "You Lose this round! Paper beats Rock";

   }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock" ){
      preliminarResult = -1;
      return "You Lose this round! Rock beats Scissors";

   }

  //Draw configuration
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper" ){
         return "Great minds think alike, again please";
   }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock" ){
       return "Great minds think alike, again please";
   }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors" ){
       return "Great minds think alike, again please";
   }
  else{return "Something was wrong";}
}
    
