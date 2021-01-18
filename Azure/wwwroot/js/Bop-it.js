let timer = 3000;
var nPress;
var press;
let hasStarted = false;
let score = 0;
function getCol() {
  nPress = null;
  let output = document.getElementById("output");
  let num = Math.floor(Math.random() * 4);
  let posCol = ["red", "yellow", "green", "blue"];
  let col = posCol[num];
  nPress = col;
  switch (num) {
    case 0:
      output.style.color = "red";
      break;
    case 1:
      output.style.color = "yellow";
      break;
    case 2:
      output.style.color = "rgb(3, 181, 3)";
      break;
    case 3:
      output.style.color = "blue";
      break;
  }

  output.innerText = col;
}

function play() {
  let output = document.getElementById("output");
  output.innerText = "";
  getCol();
  hasStarted = true;
  setTimeout(check, 3000);
}
function check() {
  if (nPress == press) {
    score++;
    if (score % 5 == 0 && timer >= 500) {
      timer -= 250;
    }
    play();
  } else {
    let output = document.getElementById("output");
    output.innerText = `your score was ${score}`;
  }
}
function colPress(color) {
  if (hasStarted) {
    press = color;
  } else {
    let output = document.getElementById("output");
    output.innerText = "please press start";
  }
}
function reset() {
  let output = document.getElementById("output");
  output.innerText = "";
  score = 0;
}
