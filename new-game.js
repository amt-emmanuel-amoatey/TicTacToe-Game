// toggle button player select
const markX = document.querySelector('.player-X')
const markO = document.querySelector('.player-O')
markX.addEventListener('click', function(){
  // console.log('click');
  markX.checked = true;
  markO.checked = false;
})
markO.addEventListener('click', function(){
  markO.checked = true;
  markX.checked = false;
})



// cpu vs player button function (single player)
let cpuBtn = document.getElementById('newGameVSCPU')
.addEventListener('click', () => {
  window.location.href = 'game-start.html'
})

// new game vs player (multi player button)
let multiPlayerBtn = document.getElementById('newGameVSPlayer')
.addEventListener('click',() =>{
  window.location.href = 'game-start.html'
} )










// const gameMenu = document.getElementById('NewGameMenu')
// console.log(gameMenu)
// const player1 = document.getElementsByClassName('player-X')
// const player2 = document.getElementsByClassName('player-O')
// const  cpubtn =  document.getElementsByClassName('NewGame-VS-CPU')
// const playerbtn = document.getElementsByClassName('NewGame-VS-PLAYER')
// console.log(playerbtn)
// const PlayOptions = document.getElementById("Play-Option");

const sceneNewGame = document.getElementById("NewGameMenu");
const playerX = document.getElementsByClassName('player-X')
const playerO = document.getElementsByClassName('player-O')
const cpubtn = document.getElementById("NewGame-VS-CPU");
const multibtn = document.getElementById("NewGame-VS-PLAYER");

let selectedPlayer = document.querySelector ('.playerX.active, .player-O"')

let currentTurn = "player-x";
sceneGameboard.setAttribute("data-turn", currentTurn)

let fields = new Array(9).fill('');

let winner = "";

let mode = "";


btnSelectX.addEventListener("click", (e) => {
  btnSelectX.classList.add("active");
  btnSelectX.disabled = true;
  btnSelectO.classList.remove("active");
  btnSelectO.disabled = false;
  selectedPlayer = btnSelectX.id;
});
btnSelectO.addEventListener("click", (e) => {
  btnSelectX.classList.remove("active");
  btnSelectX.disabled = false;
  btnSelectO.classList.add("active");
  btnSelectO.disabled = true;
  selectedPlayer = btnSelectO.id;
});















