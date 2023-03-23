let operand1 = null, operand2 = null, operator = null, currentTotal = 0;
const display = document.querySelector('#display');

function operate(operator, op1, op2){
    switch(operator){
        case '+': return op1 + op2; break;
        case '-': return op1 - op2; break;
        case '*': return op1 * op2; break;
        case '/': return op1 / op2; break;
    }
}

let inputNum = document.querySelectorAll('.number');
for(let i = 0; i < 10; i++){
    inputNum[i].addEventListener('click', () => {
        if(operator === null){
            operand1 = (operand1 * 10) + parseInt(inputNum[i].textContent);
            display.textContent = operand1;
        }else{
            operand2 = (operand2 * 10) + parseInt(inputNum[i].textContent);        
            display.textContent = operand2;
        }
    });
}

let inputOperator = document.querySelectorAll('.operator');
for(let i = 0; i < 4; i++){
    inputOperator[i].addEventListener('click', () => {
        operator = inputOperator[i].textContent;
        display.textContent = operator;
    });
}


/* function updateDisplay(input){
    () => display.textContent = input;
} */