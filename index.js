const display = document.getElementById(`display`);

function appendToDisplay(input) {
    display.value += input;
}

// TODO: must implement an actual algo, without eval, i'll think about it
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = `invalid input`;
        setTimeout(function() {
            display.value = ``;
        }, 1000);
    }
}

function clearDisplay() {
    display.value = ``;
}

function backSpace() {
    display.value = display.value.slice(0, -1);
}