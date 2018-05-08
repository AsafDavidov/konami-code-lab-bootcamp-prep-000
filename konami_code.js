const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index = 0;

function onKeyDownHandler(e){
  const key = e.key;
  
}

function init() {
  let body = document.querySelector('body');
  body.addEventListener('keydown', onKeyDownHandler());
}








