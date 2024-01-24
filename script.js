let playerName = "";
let playerScore = 0;
let finalPlayerScore = 0;

function startGame() {
    playerName = document.getElementById("playerName").value;
    if (playerName) {
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";
    }
}

function playerChoice(playerSelection) {
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    
    const message = determineWinner(playerSelection, computerSelection);
    displayResult(message, computerSelection);

    if (playerScore >= 5) {
        finalPlayerScore += playerScore;
        document.getElementById("finalPlayerScore").textContent = finalPlayerScore;
        document.getElementById("page2").style.display = "none";
        document.getElementById("page3").style.display = "block";
    }
}

function determineWinner(player, computer) {
    if (player === computer) return "It's a tie!";
    if ((player === "rock" && computer === "scissors") || 
        (player === "paper" && computer === "rock") || 
        (player === "scissors" && computer === "paper")) {
        playerScore++;
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(message, computerSelection) {
    const messageElement = document.getElementById("message");
    const scoreElement = document.getElementById("playerScore");
    
    messageElement.textContent = `${playerName}: ${message} Computer chose ${computerSelection}.`;
    scoreElement.textContent = playerScore;
}

function resetGame() {
    playerScore = 0;
    document.getElementById("playerScore").textContent = "0";
    document.getElementById("playerName").value = "";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page1").style.display = "block";
}
