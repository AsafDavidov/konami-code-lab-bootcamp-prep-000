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
function onKeyDownHandler(e){
  const key = e.key;
  
}

function init() {
  let body = document.querySelector('body');
  body.addEventListener('keydown', onKeyDownHandler());
}

let index = 0;






