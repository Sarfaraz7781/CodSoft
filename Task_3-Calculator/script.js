let display = document.getElementById("display");

function appendValue(val) {
    if (val === '±') {
        if (display.value.startsWith('-')) {
            display.value = display.value.substring(1);
        } else {
            display.value = '-' + display.value;
        }
        return;
    }
    display.value += val;
}

function clearDisplay() {
    display.value = "";
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch {
        display.value = "Error";
    }
}