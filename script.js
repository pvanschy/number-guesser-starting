let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    const humanGuessDifference = Math.abs(humanGuess - computerGuess);
    const computerGuessDifference = Math.abs(computerGuess - computerGuess);

    if(humanGuessDifference === computerGuessDifference){
        return true
    }
    else if(humanGuessDifference < computerGuessDifference){
        return true
    }
    else {
        return false
    }
}
const updateScore = (winner) => {
    if(winner === 'human'){
        humanScore++;
    } else if( winner === 'computer'){
        computerScore++;
    }
}
const advanceRound = () => {
    currentRoundNumber++;
}
