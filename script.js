let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}

const getAbsoluteDistance = (a, b) => Math.abs(a - b);



const compareGuesses = (currentHumanGuess, computerGuess, generateTarget) => {
	if ((currentHumanGuess < 0) || (currentHumanGuess > 9)) {
		window.alert("choose a number within 0 and 9 range")
	} else if ((getAbsoluteDistance(currentHumanGuess, generateTarget)) <= (getAbsoluteDistance(computerGuess, generateTarget))) {
		return true;
	} else {
		return false;
	}
}

const updateScore = (winner) => {
	if (winner === "human") {
		humanScore += 1;
	} else {
		computerScore += 1
	}
}

const advanceRound = (compareGuesses) => {
		return currentRoundNumber += 1
	}
