let display;
let history;


window.onload = function () {
  display = document.getElementById("displa
  history = document.getElementById("histor
};


function append(value) {
  display.value += value;
}


function clearAll() {
  display.value = "";
}


function backspace() {
  display.value = display.value.slice(0, -1
}


function calculate() {
  try {
    const result = Function("return " + dis


    history.innerHTML += `<div>${display.va


    display.value = result;
  } catch (e) {
    display.value = "Erro";
  }
}


// teclado físico
document.addEventListener("keydown", functi
  if (!display) return;


  if (!isNaN(e.key) || "+-*/.".includes(e.k
    append(e.key);
  }


  if (e.key === "Enter") {
    calculate();
  }


  if (e.key === "Backspace") {
    backspace();
  }


  if (e.key === "Escape") {
    clearAll();
  }
});
