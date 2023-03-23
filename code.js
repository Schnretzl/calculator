let operand1 = null, operand2 = null, operator = null, currentTotal = 0;

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
        }else{
            operand2 = (operand2 * 10) + parseInt(inputNum[i].textContent);        
        }
        // console.log(operand1);
    });
}

let inputOperator = document.querySelectorAll('.operator');
for(let i = 0; i < 4; i++){
    inputOperator[i].addEventListener('click', () => {
        operator = inputOperator[i].textContent;
        console.log(operator);
    });
}