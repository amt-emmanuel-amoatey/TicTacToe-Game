// toggle button player select
const markX = document.querySelector('.player-X')
const markO = document.querySelector('.player-O')
markX.addEventListener('click', function(){
  // console.log('click');
  markX.checked = true;
  markO.checked = false;
});
markO.addEventListener('click', function(){
  markO.checked = true;
  markX.checked = false;
})

