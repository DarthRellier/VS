var openPerenNum = 0;
var closedPerenNum = 0;
var noShowNumbers = "";
var hasUsedJavascript = false;
function appendNumber(number) {
  if (hasUsedJavascript == false) {
    let output = document.getElementById("output");
    output.innerHTML = number;
    noShowNumbers += number;
    hasUsedJavascript = true;
  } else {
    let output = document.getElementById("output");
    output.innerHTML += number;
    noShowNumbers += number;
  }
}
function appendOp(op) {
  noShowNumbers += op;
  hasUsedJavascript = false;
}

function equalFunc() {
  let evaluatedNumbers = eval(noShowNumbers);
  output.innerHTML = evaluatedNumbers;
}

function backspace() {
  if (noShowNumbers.length > 0) {
    if (noShowNumbers.charAt(noShowNumbers.length - 1) == "(") {
      openPerenNum--;
      noShowNumbers = noShowNumbers.substring(0, noShowNumbers.length - 1);
    } else if (noShowNumbers.charAt(noShowNumbers.length - 1) == ")") {
      closedPerenNum--;
      noShowNumbers = noShowNumbers.substring(0, noShowNumbers.length - 1);
    } else if (output.innerHTML.length > 0) {
      noShowNumbers = noShowNumbers.substring(0, noShowNumbers.length - 1);
      output.innerHTML = output.innerHTML.substring(
        0,
        output.innerHTML.length - 1
      );
    }
  }
}

function clearAll() {
  noShowNumbers = "";
  output.innerHTML = "<br>";
  hasUsedJavascript = false;
  openPerenNum = 0;
  closedPerenNum = 0;
}
function peren(perenthisis) {
  noShowNumbers += perenthisis;
}
