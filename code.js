let operand1 = null, operand2 = null, operator = null, currentTotal = null;

function operate(operator, op1, op2){
    switch(operator){
        case '+': return op1 + op2; break;
        case '-': return op1 - op2; break;
        case '*': return op1 * op2; break;
        case '/': return op1 / op2; break;
    }
}

console.log(operate('/',3,7));