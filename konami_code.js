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
  let body = document.querySelector('body');
  body.addEventListener('keydown', onKeyDownHandler());
}

let index = 0;

function onKeyDownHandler(e){
  const key = e.key;
  console.log(key);
}




