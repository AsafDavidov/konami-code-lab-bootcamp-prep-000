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

function init() {
  const body = document.querySelector('body');
  body.addEventListener('keydown', onKeyDownHandler);
}

function onKeyDownHandler(e){
    
    if (e === undefined){
    }
    else{
      const key = e.key;
      console.log(index);
      if (key === codes[index]){
        index++;
        if (index === codes.length){
          console.log(index + ' end')
          alert("Hurray!");
          index = 0;
        }
      }
      else{
        index = 0;
      }
    }
  }








