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

let playOneRound = (usr) => {
    if (usr === null) {return null};
    let comp = getCompHand();
    
    let text = document.querySelector(".top .text");
    let subtext = document.querySelector(".top .subtext");

    let img1 = document.querySelector(".box .img1");
    let img2 = document.querySelector(".box .img2");

    //Basic rock, paper, scissors rules decide round.
    if (usr === comp) {
        text.textContent = "Tie!";
        if (usr === "rock") {
            subtext.textContent = "You both chose Rock"
            img1.src = "./images/rock.png";
            img2.src = "./images/rock.png";
        } else if (usr === "paper") {
            subtext.textContent = "You both chose Paper"
            img1.src = "./images/paper.png";
            img2.src = "./images/paper.png";
        } else {
            subtext.textContent = "You both chose Scissors"
            img1.src = "./images/scissors.png";
            img2.src = "./images/scissors.png";
        }
    } else if (usr === "rock" && comp === "scissors") {
        text.textContent = "You Win!";
        subtext.textContent = "Rock beats Scissors";
        img1.src = "./images/rock.png";
        img2.src = "./images/scissors.png";
    } else if (usr === "rock" && comp === "paper") {
        text.textContent = "You Lose!";
        subtext.textContent = "Paper beats Rock";
        img1.src = "./images/rock.png";
        img2.src = "./images/paper.png";
    } else if (usr === "scissors" && comp === "paper") {
        text.textContent = "You Win!";
        subtext.textContent = "Scissors beat Paper";
        img1.src = "./images/scissors.png";
        img2.src = "./images/paper.png";
    } else if (usr === "scissors" && comp === "rock") {
        text.textContent = "You Lose!";
        subtext.textContent = "Rock beats Scissors";
        img1.src = "./images/scissors.png";
        img2.src = "./images/rock.png";
    } else if (usr === "paper" && comp === "rock") {
        text.textContent = "You Win!";
        subtext.textContent = "Paper beats Rock";
        img1.src = "./images/paper.png";
        img2.src = "./images/rock.png";
    } else if (usr === "paper" && comp === "scissors") {
        text.textContent = "You Lose!";
        subtext.textContent = "Scissors beat Paper";
        img1.src = "./images/paper.png";
        img2.src = "./images/scissors.png";
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

// console.log(rockPaperScissors());


////////////////////////////// NEW STUFF //////////////////////////

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

btn1.addEventListener("click", () => {playOneRound("rock")});

btn2.addEventListener("click", () => {playOneRound("paper")});

btn3.addEventListener("click", () => {playOneRound("scissors")});


