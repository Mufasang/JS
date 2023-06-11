document.addEventListener("DOMContentLoaded", function () {
  var player1ScoreInput = document.getElementById("player1Score");
  var player2ScoreInput = document.getElementById("player2Score");
  var player1Button = document.getElementById("player1");
  var player2Button = document.getElementById("player2");
  var resetButton = document.querySelector(".reset");
  var displayWinnerInput = document.getElementById("displayWinner");
  var playAgainButton = document.getElementById("play_again");
  var scoreCardDiv = document.querySelector(".score_card");
  var containerDiv = document.querySelector(".container");

  var winningScore = 5;
  var player1Score = 0;
  var player2Score = 0;

  scoreCardDiv.style.display = "none";

  player1Button.addEventListener("click", function () {
    player1Score++;
    player1ScoreInput.value = player1Score;
    checkWinner();
  });

  player2Button.addEventListener("click", function () {
    player2Score++;
    player2ScoreInput.value = player2Score;
    checkWinner();
  });

  resetButton.addEventListener("click", resetGame);

  playAgainButton.addEventListener("click", resetGame);

  function checkWinner() {
    if (player1Score === winningScore || player2Score === winningScore) {
      player1Button.disabled = true;
      player2Button.disabled = true;

      if (player1Score === winningScore) {
        displayWinnerInput.value = "Player 1 wins!";
      } else {
        displayWinnerInput.value = "Player 2 wins!";
      }

      playAgainButton.disabled = false;
      scoreCardDiv.style.display = "block";
      containerDiv.style.display = "none";
    }
  }

  function resetGame() {
    player1Score = 0;
    player2Score = 0;
    player1ScoreInput.value = player1Score;
    player2ScoreInput.value = player2Score;
    player1Button.disabled = false;
    player2Button.disabled = false;
    displayWinnerInput.value = "";
    playAgainButton.disabled = true;
    scoreCardDiv.style.display = "none";
    containerDiv.style.display = "block";
  }
});
