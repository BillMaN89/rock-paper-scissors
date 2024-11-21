//salute
console.log('Hello BillMaN!')

//variable declaration
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[(Math.floor(Math.random() * choices.length))];
}
//console.log(getComputerChoice());


function getHumanChoice(){
    return prompt("Player, please enter your choice: ").toLowerCase();
}
//console.log(getHumanChoice());


function playRound(humanChoice, compChoice){
    // if ((humanChoice !== "rock") || (humanChoice !== "paper") || (humanChoice !== "scissors")) {
    //     return console.log("Please enter a valid choice");
    // }
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

playRound(humanSelection, computerSelection);