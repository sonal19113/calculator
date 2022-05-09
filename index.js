let screen = document.getElementById("screen");

function display(num) {
  screen.value += num;
}

function Calculate() {
  try {
    screen.value = eval(screen.value);
  } catch {
    alert("Invalid");
  }
}

function Clear() {
  screen.value = "";
}

function Delete() {
  screen.value = screen.value.slice(0, -1);
}

function Display(num) {
  screen.value += 1 / num;
}
