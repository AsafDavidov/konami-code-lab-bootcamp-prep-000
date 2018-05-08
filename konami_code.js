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
function init() {
  const body = document.querySelector('body');
  body.addEventListener('keydown', onKeyDownHandler(event));
}

let index = 0;

function onKeyDownHandler(e){
  console.log(e.key);
}




