let whatColor = {
  1: "red",
  2: "orange",
  3: "red",
  4: "orange",
  5: "red",
  6: "orange",
  7: "red",
  8: "orange",
  9: "red",
  10: "orange",
  11: "red",
  12: "orange",
  13: "red",
  14: "orange",
  15: "red",
  16: "orange",
  17: "red",
  18: "orange",
  19: "red",
  20: "orange",
  21: "red",
  22: "orange",
  23: "red",
  24: "orange",
  null: "royalblue",
};
let show = false;
let useHBrew = true;
let model = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, null],
];
function checkForWin() {
  let win = true;
  let val = 0;
  for (let x = 0 && win == true; x < model.length; x++) {
    for (let y = 0 && win == true; y < model.length; y++) {
      let lastVal = val;
      val = model[y][x];
      if (val != null && val < lastVal && lastVal != null) {
        win = false;
      }
    }
  }

  if (win) {
    let no_move = document.getElementById("no_move");
    no_move.innerText = "YOU WIN!!!";
    setTimeout(playAlert, 4000);
  }
}
function updateView() {
  for (let x = 0; x < model.length; x++) {
    for (let y = 0; y < model[x].length; y++) {
      let buttonId = x + "_" + y;
      let button = document.getElementById(buttonId);
      if (useHBrew) {
        button.innerText = displayFilter(model[x][y]);
      } else {
        button.innerText = model[x][y];
      }
      button.style.backgroundColor = whatColor[model[x][y]];
    }
  }
  checkForWin();
}
function onClick(x, y) {
  if (x > 0 && model[x - 1][y] == null) {
    model[x - 1][y] = model[x][y];
    model[x][y] = null;
    updateView();
  } else if (x < model.length - 1 && model[x + 1][y] == null) {
    model[x + 1][y] = model[x][y];
    model[x][y] = null;
    updateView();
  } else if (y > 0 && model[x][y - 1] == null) {
    model[x][y - 1] = model[x][y];
    model[x][y] = null;
    updateView();
  } else if (y < model[x].length - 1 && model[x][y + 1] == null) {
    model[x][y + 1] = model[x][y];
    model[x][y] = null;
    updateView();
  } else {
    let no_move = document.getElementById("no_move");
    no_move.innerText = "\u26A0 invalid move";
    setTimeout(clear, 3000);
  }
}

function clear() {
  let clear = document.getElementById("no_move");
  clear.innerText = "";
}
function displayFilter(num) {
  switch (num) {
    case 1:
      return "\u05D0";
    case 2:
      return "\u05D1";
    case 3:
      return "\u05D2";
    case 4:
      return "\u05D3";
    case 5:
      return "\u05D4";
    case 6:
      return "\u05D5";
    case 7:
      return "\u05D6";
    case 8:
      return "\u05D7";
    case 9:
      return "\u05D8";
    case 10:
      return "\u05D9";
    case 11:
      return "\u05DB";
    case 12:
      return "\u05DC";
    case 13:
      return "\u05DE";
    case 14:
      return "\u05DD";
    case 15:
      return "\u05E0";
    case 16:
      return "\u05DF";
    case 17:
      return "\u05E1";
    case 18:
      return "\u05E2";
    case 19:
      return "\u05E4";
    case 20:
      return "\u05E6";
    case 21:
      return "\u05E7";
    case 22:
      return "\u05E8";
    case 23:
      return "\u05E9";
    case 24:
      return "\u05EA";
    case null:
      return null;
  }
}
function useH() {
  let numbers = document.getElementById("numbers");
  if (numbers.innerText == "Use Numbers") {
    numbers.innerText = "Use Hebrew";
    useHBrew = false;
    updateView();
  } else {
    numbers.innerText = "Use Numbers";
    useHBrew = true;
    updateView();
  }
}
function playAlert() {
  alert("Good Job you won!! Press CTRL/CMD + R to Play Agian ");
}

function randomizeBoard() {
  let array = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    null,
  ];
  for (let x = 0; x < model.length; x++) {
    for (let y = 0; y < model.length; y++) {
      let num = Math.floor(Math.random() * array.length);
      model[x][y] = array[num];
      array.splice(num, 1);
    }
  }
  updateView();
}

function cheat() {
  let code = document.getElementById("code");
  let length = "i will use this for display ;)";
  if (code.value.toLowerCase() == length) {
    model = [
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [5, 10, 15, 20, null],
    ];
    code.value = "";
    code.innerText = "";
    updateView();
  }
}
// FOR DISPLAY ONLY
