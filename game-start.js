const gameBoard = document.getElementbyId("Game-Start");


const winnerX = false;
const winnerO = false;
const cell0 = document.getElementById("0");
const cell1 = document.getElementById("1");
const cell2 = document.getElementById("2");
const cell3 = document.getElementById("3");
const cell4 = document.getElementById("4");
const cell5 = document.getElementById("5");
const cell6 = document.getElementById("6");
const cell7 = document.getElementById("7");
const cell8 = document.getElementById("8");

var origBoard = Array.from(Array(9).keys());
var huPlayer;
var aiPlayer;

const win_pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function newGameCPU() {
  gameBoard.style.display = "initial";
  gameMenu.style.display = "none";
  if (XradioBtn.checked === true) {
    huPlayer = "X";
    aiPlayer = "O";
    player1Name.innerHTML = "X (You)";
    player2Name.innerHTML = "0 (CPU)";
  } else {
    huPlayer = "O";
    aiPlayer = "X";
    player1Name.innerHTML = "X (CPU)";
    player2Name.innerHTML = "0 (You)";
  }
  cpuBtn.setAttribute("data-value", "active");
  playerBtn.setAttribute("data-value", "");

  cpuTurn();
}


