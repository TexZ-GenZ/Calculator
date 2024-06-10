const output = document.querySelector(".output");


let firstNumber = "0";
let secondNumber = "";
let operator = "";
output.textContent = firstNumber;

const numbers = document.querySelectorAll(".number");

const secondaryOperators = document.querySelectorAll(".two");

function evaluate(firstNumber,secondNumber,operator) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    switch (operator) {
        case "÷":
            return `${firstNumber / secondNumber}`
        case "×":
            return `${firstNumber * secondNumber}`
        case "+":
            return `${firstNumber + secondNumber}`
        case "-":
            return `${firstNumber - secondNumber}`
    }
}

numbers.forEach(number => {
    number.addEventListener("click", () => {

        if (!number.classList.contains("one")) {
            if (operator === '') {
            if (firstNumber === '0') {
                firstNumber = number.textContent;
            } else {
                firstNumber += number.textContent;
            }
        }
        else{
            if (secondNumber === '') {
                secondNumber = number.textContent;
            } else {

                secondNumber += number.textContent;
            }
        }
        }
        
        
        output.textContent = firstNumber + operator + secondNumber;
    });
});

secondaryOperators.forEach(operators =>{
    operators.addEventListener("click",()=>{
        if (operators.textContent != '=') {
            if (secondNumber === '') {
                operator = operators.textContent;
            }
            else{
                firstNumber = evaluate(firstNumber,secondNumber,operator);
                secondNumber = '';
                operator = operators.textContent;
            }
            output.textContent = firstNumber + operator + secondNumber;
        }
        
    })
})


const equalTo = document.querySelector(".result");

equalTo.addEventListener("click",()=>{
    firstNumber = evaluate(firstNumber,secondNumber,operator);
    secondNumber = '';
    operator = '';
    output.textContent = firstNumber + operator + secondNumber;
})

const primaryOperators = document.querySelectorAll(".one");

function doSecondaryOperation(Number,operator) {

    Number = parseFloat(Number);
    console.log(Number);
    console.log(operator);
    switch (operator) {
        case "√x":
            return `${Math.sqrt(Number)}`;
        case "x2":
            return `${Number**2}`;
        case "1/x":
            return `${1 / Number}`;
        case "+/-":
            return `${-1* Number}`;
    }
    return ``
}


primaryOperators.forEach(operators =>{
    operators.addEventListener("click",()=>{
        console.log(operator.textContent);
        console.log(secondNumber);
        console.log(firstNumber);

        if (secondNumber == '') {
            console.log(firstNumber);
            if ( operator == ''){
                console.log(firstNumber);
                firstNumber = doSecondaryOperation(firstNumber,operators.textContent);
            }
        }
        else{
            console.log(secondNumber);
            secondNumber = doSecondaryOperation(secondNumber,operators.textContent);
        }
        
         output.textContent = firstNumber + operator + secondNumber;
    })
})

