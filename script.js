let display = document.getElementById("display");

function append(value) {
  if (display.value === "0") display.value = value;
  else display.value += value;
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") display.value = "0";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}


// ====== Dark/Light Mode Toggle Script ======
const themeSwitch = document.getElementById('themeSwitch');

if (themeSwitch) {
  themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', themeSwitch.checked);
    localStorage.setItem('darkMode', themeSwitch.checked);
  });

  // Load saved mode
  if (localStorage.getItem('darkMode') === 'true') {
    themeSwitch.checked = true;
    document.body.classList.add('dark-mode');
  }
}
