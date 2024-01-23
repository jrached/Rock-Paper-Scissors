// What this file does: Implements logic for basic rock, paper, scissors game.

// ////////////////////////Global Variables ///////////////////////////////////
let usrScore = 0,
    compScore = 0,
    reset = false;

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

// //////////////////////////Main Function/////////////////////////

let playOneRound = (usr) => {
    if (reset == true) {
        usrScore = 0;
        compScore = 0;
        reset = false;
    }

    let comp = getCompHand();
    
    //Get selectors
    let text = document.querySelector(".top .text");
    let subtext = document.querySelector(".top .subtext");

    let img1 = document.querySelector(".box1 .img");
    let img2 = document.querySelector(".box2 .img");

    let usrPoints = document.querySelector(".box1 .text");
    let compPoints = document.querySelector(".box2 .text");

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

    // Update points and score board
    if (text.textContent.slice(4,7) == "Win") {
        usrScore += 1;
    } else if (text.textContent.slice(4,8) == "Lose") {
        compScore += 1;
    }

    usrPoints.textContent = "You: " + usrScore;
    compPoints.textContent = "Puter: " + compScore;

    //Decide winner
    if (usrScore === 3) {
        text.textContent = "Congrats, You've Won!";
        subtext.textContent = usr.slice(0,1).toUpperCase() + usr.slice(1) + " beats " + comp.slice(0,1).toUpperCase() + comp.slice(1);
        img1.src = "./images/plankton.webp";
        img2.src = "./images/puter.png";
        reset = true;      
    }

    if (compScore === 3) {
        text.textContent = "You've Lost! Wah Wah...";
        subtext.textContent = comp.slice(0,1).toUpperCase() + comp.slice(1) + " beats " + usr.slice(0,1).toUpperCase() + usr.slice(1);
        img1.src = "./images/plankton2.png";
        img2.src = "./images/puter2.webp";
        reset = true;    
    }
}


//////////////////////////////Event Listeners //////////////////////////

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

btn1.addEventListener("click", () => {playOneRound("rock")});
btn1.addEventListener("mouseover", () => {
    btn1.style["background-color"] = "rgb(93, 238, 202)";
})
btn1.addEventListener("mousedown", () => {
    btn1.style["background-color"] = "rgb(113, 255, 220)";
})
btn1.addEventListener("mouseup", () => {
    btn1.style["background-color"] = "rgb(93, 238, 202)";
})
btn1.addEventListener("mouseout", () => {
    btn1.style["background-color"] = "rgb(80, 209, 177)";
})



btn2.addEventListener("click", () => {playOneRound("paper")});
btn2.addEventListener("mouseover", () => {
    btn2.style["background-color"] = "rgb(93, 238, 202)";
})
btn2.addEventListener("mousedown", () => {
    btn2.style["background-color"] = "rgb(113, 255, 220)";
})
btn2.addEventListener("mouseup", () => {
    btn2.style["background-color"] = "rgb(93, 238, 202)";
})
btn2.addEventListener("mouseout", () => {
    btn2.style["background-color"] = "rgb(80, 209, 177)";
})


btn3.addEventListener("click", () => {playOneRound("scissors")});
btn3.addEventListener("mouseover", () => {
    btn3.style["background-color"] = "rgb(93, 238, 202)";
})
btn3.addEventListener("mousedown", () => {
    btn3.style["background-color"] = "rgb(113, 255, 220)";
})
btn3.addEventListener("mouseup", () => {
    btn3.style["background-color"] = "rgb(93, 238, 202)";
})
btn3.addEventListener("mouseout", () => {
    btn3.style["background-color"] = "rgb(80, 209, 177)";
})



