
const display = document.querySelector(".display");

function clearDisplay() {
    display.value = "";
}

function appendValue(value) {
    display.value += value;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}