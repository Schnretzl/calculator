let operand1 = null, operand2 = null, operator = null, currentTotal = 0;

function operate(operator, op1, op2){
    switch(operator){
        case '+': return op1 + op2; break;
        case '-': return op1 - op2; break;
        case '*': return op1 * op2; break;
        case '/': return op1 / op2; break;
    }
}

let test = document.querySelector('#one');
test.addEventListener('click', () => {
    currentTotal = (currentTotal * 10) + 1;
    console.log(currentTotal);
});
