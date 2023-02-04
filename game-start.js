const gameStart = document.getElementById('gameStart')
const cellBoard = document.getElementsByClassName('cellBoard')
const headDisplay = document.getElementsByClassName('headDisplay')
const playerTurnDisplay = document.getElementsByClassName('player-turn')
const cellContainer = document.getElementById ('cellContainer')
let cellElements = document.querySelectorAll('.cell-index')

// click each cell once
cellElements.forEach(cell => {
  
  cell.addEventListener('click',  handleClick, {once: true})
 
})

function handleClick(e){
  console.log('clicked') 
}







// restart modal Display
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModalBtn = document.querySelector('.btn-close')

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}
restartBtn.addEventListener('click', openModal)

// close modal 
 function closeModal() {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}
closeModalBtn.addEventListener('click', closeModal)
let yesRestartBtn= document
  .querySelector(".Yes-Restart")
  .addEventListener("click", () => {
    window.location.href = "new-game.html";
  });









// turn indicator
// function hitCell(cell) {
//   let boxChoice = document.getElementById(cell)
//    img.src = document.createElement('img')

//    if (player-turn.getAttribute('data-value') === "X") {
//     img.src = './assets/icon-x.svg';
//     img.setAttribute('class' , 'cellPlayed');
//     cellChoice.appendChild(img);
//     cellChoice.classList.remove('hoverClassX');
//     cellChoice.setAttribute('data-value' , 'X');
//     cellChoice.setAttribute('onclick', '' )
//     turn.setAttribute('data-value', 'O')
//     turn.src = './assets/icon-o-turn.svg';
//    }
// }




//  let imgX = document.createElement("img");
//  imgX.src = "./assets/icon-x.svg";
//  console.log(imgX);
let cell_index = document.querySelectorAll(".cell-index");
  let imgX = document.createElement('img')
  imgX.src = './assets/icon-x.svg';

cell_index.forEach((item) => {
  item.addEventListener("click" , ()=>{
    if(item.childNodes == 1){
      item = item
    }else{
    item.appendChild(imgX);
     item.classList += " new_class";
    }
  console.log(item);

  })

});

// insert player images
// function test() {
//   let imgX = document.createElement('img')
//   imgX.src = './assets/icon-x.svg';
//    for (let index = 0; index < cell_index.length ; index++) {
//      let element = cell_index[index];
//      element.appendChild(imgX);
//      console.log(element);
//    }
//      return;

// }



// test();

