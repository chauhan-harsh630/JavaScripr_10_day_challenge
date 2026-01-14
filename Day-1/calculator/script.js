let dispay = document.getElementById('display');


let firstnum = "";
let secondnum = "";
let operator = "";
let expression = "";
let isSecond = false;


function appendValue(number) {
    expression += number
    if (!isSecond) {
        firstnum += number;
    } else {
        secondnum += number;
    }
    dispay.value = expression;
}

function chooseOperator(op) {
    if (firstnum === "") return;
    if (secondnum !== "") {
        calculate();
    }

    operator = op;
    isSecond = true;
    expression = firstnum + op;
    dispay.value = expression;
}

function calculate() {
    if (firstnum === "" || secondnum === "" || operator === "") return;

    let num1 = Number(firstnum);
    let num2 = Number(secondnum);
    let result;
    if (operator === '+') result = num1 + num2;
    else if (operator === '-') result = num1 - num2;
    else if (operator === '*') result = num1 * num2;
    else if (operator === '/') {
        if (num2 === 0) {
            dispay.value = "Error";
            reset();
            return;
        }
        result = num1 / num2;
    }

    dispay.value = result;
    firstnum = result.toString();
    secondnum = "";
    expression = firstnum;
    isSecond = false;
}

function clearbtn() {
    reset();
    dispay.value = "";
}

function reset() {
    firstnum = "";
    secondnum = "";
    operator = "";
    expression = "";
    isSecond = false;
}

function appendDecimal(dot) {
    if (dot === '.') {
        if (!isSecond && firstnum.includes('.')) return;
        if (!isSecond && firstnum.includes('.')) return;
    }
    expression += dot;
    if (!isSecond) {
        firstnum += dot;

    } else {
        secondnum += dot;
    }

    dispay.value = expression;
}