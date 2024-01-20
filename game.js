// What this file does: Implements logic for basic rock, paper, scissors game.

//////////////////////////// Helper Functions //////////////////////////////

let getCompHand = () => {
    let num = Math.floor(3*Math.random());
    
    if (num % 3 === 0) {
        return "paper";
    } else if (num % 3 === 1) {
        return "rock";
    } else if (num % 3 === 2) {
        return "scissors";
    }
}

let getUsrHand = () => {
    let hand = prompt("Rock, paper, scissors shoot! (type your answer)");

    if (hand == null) {return hand}; // If hand is null it means user cancelled the game.
    hand = hand.toLowerCase(); // Lower casing allows for case sensitive input.
    
    while (hand != "rock" && hand != "paper" && hand != "scissors") {
        hand = prompt("You've entered an invalid answer. Please choose between rock, paper, and scissors.");
        
        if (hand == null) {break}; 
        hand = hand.toLowerCase();
    }

    return hand
}

let playOneRound = () => {
    let usr = getUsrHand();
    if (usr === null) {return null};
    let comp = getCompHand();

    //Basic rock, paper, scissors rules decide round.
    if (usr === comp) {
        return "tie";
    } else if (usr === "rock" && comp === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (usr === "rock" && comp === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (usr === "scissors" && comp === "paper") {
        return "You Win! Scissors beats Paper";
    } else if (usr === "scissors" && comp === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (usr === "paper" && comp === "rock") {
        return "You Win! Paper beats Rock";
    } else if (usr === "paper" && comp === "scissors") {
        return "You Lose! Scissors beats Paper";
    }
}

//////////////////////////// Main Function ///////////////////////

// let rockPaperScissors = () => {
//     let compScore = 0,
//         usrScore = 0;

//     //Play best out of 5 rounds.
//     while (compScore < 3 &&  usrScore < 3) {
//         outcome = playOneRound();
//         if (outcome === null) {return "You Forfeited"}

        
//         if (outcome.slice(0, 7) === "You Win") {
//             usrScore += 1;
//         }
//         if (outcome.slice(0,8) === "You Lose") {
//             compScore += 1;
//         }
        
//         console.log(outcome);
//     }

//     //Decide winner.
//     if (usrScore > compScore) {
//         return "You've Won! Congratulations!";
//     } else {
//         return "You've Lost! Wah wah..."
//     }

// }

console.log(rockPaperScissors());
