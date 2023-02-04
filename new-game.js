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
  if (!markX.checked && !markO.checked) {
    alert('SELECT PLAYER X or O')
    return
  }
  window.location.href = 'game-start.html'
})

// new game vs player (multi player button)
let multiPlayerBtn = document.getElementById('newGameVSPlayer')
.addEventListener('click',() =>{
   if (!markX.checked && !markO.checked) {
     alert('SELECT PLAYER X or O');
     return;
   }
  window.location.href = 'game-start.html'
} )

// select whose turn
const XradioBtn = document.getElementById('X-mark')
const OradioBtn = document.getElementById('O-mark')
  function newGameVSCPU () {
    if (XradioBtn.checked === true) {
      huPlayer = 'X'
      aiPlayer = 'O'
      player1Name.innerHTML = 'X (CPU)'
      player2Name.innerHTML = '0 (You)'
    } else{
      huPlayer = "O"
      aiPlayer = "X"
      player1Name.innerHTML = 'X (You)'
      player2Name.innerHTML = 'O (CPU)'
    }
    const cpuBtn = document.getElementById('newGameVSCPU')
    cpuBtn.setAttribute('data-value', "active")
    playerBtn.setAttribute('data-value', '')
    cpuTurn();
  }

  function NewGameVSPLAYER(){
    player1Name.innerHTML = 'X (P1)'
    player2Name.innerHTML = '0 (P2)'
    const playerBtn = document.getElementById('newGameVSPlayer')
    playerBtn.setAttribute('data-value','active')
    cpuBtn.setAttribute('data-value', '')
  }
    













// const sceneNewGame = document.getElementById("NewGameMenu");
// const playerX = document.getElementsByClassName('player-X')
// const playerO = document.getElementsByClassName('player-O')
// const cpubtn = document.getElementById("NewGame-VS-CPU");
// const multibtn = document.getElementById("NewGame-VS-PLAYER");

// let selectedPlayer = document.querySelector ('.playerX.active, .player-O"')

// let currentTurn = "player-x";
// sceneGameboard.setAttribute("data-turn", currentTurn)

// let fields = new Array(9).fill('');

// let winner = "";

// let mode = "";


// btnSelectX.addEventListener("click", (e) => {
//   btnSelectX.classList.add("active");
//   btnSelectX.disabled = true;
//   btnSelectO.classList.remove("active");
//   btnSelectO.disabled = false;
//   selectedPlayer = btnSelectX.id;
// });
// btnSelectO.addEventListener("click", (e) => {
//   btnSelectX.classList.remove("active");
//   btnSelectX.disabled = false;
//   btnSelectO.classList.add("active");
//   btnSelectO.disabled = true;
//   selectedPlayer = btnSelectO.id;
// });















