let operand1 = null, operand2 = null, operator = null, currentTotal = 0, tooLong = 8;
const display = document.querySelector('#display');

function operate(operator, op1, op2){
    switch(operator){
        case '+': return op1 + op2; break;
        case '-': return op1 - op2; break;
        case '*': return op1 * op2; break;
        case '/': return op1 / op2; break;
    }
}

const inputNum = document.querySelectorAll('.number');
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

const inputOperator = document.querySelectorAll('.operator');
for(let i = 0; i < 4; i++){
    inputOperator[i].addEventListener('click', () => {
        operator = inputOperator[i].textContent;
    });
}

const clearAll = document.querySelector('#clear');
clearAll.addEventListener('click', () => {
    operand1 = null;
    operand2 = null;
    operator = null;
    currentTotal = null;
    display.textContent = '0';
});

const performOp = document.querySelector('#equal');
performOp.addEventListener('click', () => {
    switch(operator){
        case '+':currentTotal = operand1 + operand2; break;
        case '-':currentTotal = operand1 - operand2; break;
        case '*':currentTotal = operand1 * operand2; break;
        case '/':currentTotal = operand1 / operand2; break;
    }
    display.textContent = currentTotal;
    operand1 = currentTotal;
})

