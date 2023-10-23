document.addEventListener("DOMContentLoaded", function () {
    let currentPlayer = "X"; 

    let gameBoard = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]; 
  
    const cells = document.getElementsByClassName("cell");
    const resetButton = document.getElementById("reset-button");
  
    function movement(row, col) {
      if (gameBoard[row][col] === "") {
        gameBoard[row][col] = currentPlayer;
        cells[row * 3 + col].textContent = currentPlayer;
  
        if (checkWin(currentPlayer)) {
          setTimeout(displayWinner, 100);
          return;
        }
  
        if (checkDraw()) {
          setTimeout(displayDraw, 100);
          return;
        }
  
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  
    function checkWin(player) {
      for (let row = 0; row < 3; row++) {
        if (
          gameBoard[row][0] === player &&
          gameBoard[row][1] === player &&
          gameBoard[row][2] === player
        ) {
          return true;
        }
      }
  
      // Check columns
      for (let col = 0; col < 3; col++) {
        if (
          gameBoard[0][col] === player &&
          gameBoard[1][col] === player &&
          gameBoard[2][col] === player
        ) {
          return true;
        }
      }
  
      // Check diagonals
      if (
        (gameBoard[0][0] === player &&
          gameBoard[1][1] === player &&
          gameBoard[2][2] === player) ||
        (gameBoard[0][2] === player &&
          gameBoard[1][1] ===player &&
          gameBoard[2][0] === player)
      ) {
        return true;
      }
  
      return false;
    }
  
    function checkDraw() {
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          if (gameBoard[row][col] === "") {
            return false;
          }
        }
      }
      return true;
    }
  
    function displayWinner() {
      confirm("Player " + currentPlayer + " wins!");
      resetGame();
    }
  
    function displayDraw() {
      confirm("It's a draw!");
      resetGame();
    }
  
    function resetGame() {
      currentPlayer = "X";
      gameBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
  
      for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
      }
    }
  
    // Add event listeners to cells
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", function () {
        const row = Math.floor(i / 3);
        const col = i % 3;
        movement(row, col);
      });
    }
  
    // Event listener for the reset button
    resetButton.addEventListener("click", resetGame);
  });