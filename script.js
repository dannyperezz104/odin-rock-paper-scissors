function getComputerChoice(){
    let choiceNum = Math.floor(Math.random()*3)+1;
    if (choiceNum == 1){
        return "rock";
    }
    else if (choiceNum == 2){
        return "paper";
    } else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt('Please enter "rock", "paper", or "scissors"');
    return choice;
}





function playGame(){
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == "rock"){
            if (computerChoice == "rock"){
                console.log("Computer chose Rock. You tied!");
            }else if (computerChoice == "paper"){
                console.log("You lose! Paper beats Rock");
                computerScore++;
            } else {
                console.log("You win! Rock beats Scissors");
                humanScore++;
            }
        }
        else if (humanChoice == "paper"){
            if (computerChoice == "rock"){
                console.log("You win! Paper beats Rock.");
                humanScore++;
            }else if (computerChoice == "paper"){
                console.log("Computer chose Paper. You tied!");
            } else {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
            }
        }
        else {
            if (computerChoice == "rock"){
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
            }else if (computerChoice == "paper"){
                console.log("You win! Scissors beats Paper.");
                humanScore++;
            } else {
                console.log("Computer chose Scissors. You tied!");
                computerScore++;
            }
        }
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

playGame();