//salute
console.log('Hello BillMaN!')

//variable declaration
const choices = ['rock', 'paper', 'scissors'];
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    return choices[(Math.floor(Math.random() * choices.length))];
}
//console.log(getComputerChoice());


function getHumanChoice(){
    do{
     humanChoice = prompt("Player, please enter your choice: ").toLowerCase();
     if (!choices.includes(humanChoice)){
        alert("Incalid choice. Please enter 'rock','paper', or 'scissors' to continue. ");
     }
    } while (!choices.includes(humanChoice));

    return humanChoice;
}
//console.log(getHumanChoice());


function playRound(humanChoice, compChoice){
    if (humanChoice === "paper"){
        if (compChoice === "rock"){
            console.log("You win! Paper beats Rock!");
            humanScore++;
        }else if (compChoice === "scissors"){
            console.log("You lose! Scissors beats Paper!");
            computerScore++;
        }else {
            console.log("It's a tie!");
        }
    }else if (humanChoice === "rock"){
        if (compChoice === "paper"){
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        }else if (compChoice === "scissors"){
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        }else {
            console.log("It's a tie!");
        }
    }else {//scissors
        if (compChoice === "rock"){
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        }else if (compChoice === "paper"){
            console.log("You win! Scissors beats Paper!");
            humanScore++;
        }else{
            console.log("It's a tie!")
        }
    }
    return console.log(`The score is:  Human: ${humanScore}  Computer: ${computerScore}`)
    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`You chose ${humanSelection}. The computer chose ${computerSelection}.`);
playRound(humanSelection, computerSelection);