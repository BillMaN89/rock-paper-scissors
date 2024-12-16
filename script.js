//salute
console.log('Hello Player!')

//variable declaration
const choices = ['rock', 'paper', 'scissors'];
let humanChoice = '';

const btn = document.querySelector("#btn");
btn.addEventListener("click", alertFunction);


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


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let ties = 0;
    let round = 1;

    // for (round = 1; round <= 5; round++){
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();

    //     console.log(`You chose ${humanSelection}.\nThe computer chose ${computerSelection}.`);
    //     playRound(humanSelection, computerSelection);
    //     console.log(`The score so far is:\n  Player: ${humanScore}\n  Computer: ${computerScore}\n  Ties: ${ties}`)
    // }

    //round function  
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
                ties++
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
                ties++;
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
                ties++;
            }
        }
        return console.log(`End of round  ${round}`);
        }
}