let operand1 = null, operand2 = null, operator = null, currentTotal = 0, tooLong = 8, lastBtnClickedShouldReset = false, lastBtnClickedWasOperator = false;
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
        // if(operator === null && 
        // display.textContent.length < 9){
        //         console.log(display.textContent.length);
        //         operand1 = (operand1 * 10) + parseInt(inputNum[i].textContent);
        //         display.textContent = operand1;
        // }else if(operator !== null && 
        // display.textContent.length < 9){
        //         operand2 = (operand2 * 10) + parseInt(inputNum[i].textContent);
        //         display.textContent = operand1;
        // }else{
        //     if(lastBtnClickedShouldReset){
        //         operand1 = parseInt(inputNum[i].textContent);
        //         operand2 = null;
        //         operator = null;
        //         display.textContent = operand1;
        //         lastBtnClickedShouldReset = false;
        //     }
        //     else{
        //     operand2 = (operand2 * 10) + parseInt(inputNum[i].textContent);        
        //     display.textContent = operand2;
        //     }
        // }
        // lastBtnClickedShouldReset = false;
    
        if(lastBtnClickedWasOperator){
            operand2 *= 10;
            if (operand2 >= 0){
                operand2 += parseInt(inputNum[i].textContent);
            } 
            else{
                operand2 -= parseInt(inputNum[i].textContent);
            }
            display.textContent = operand2;
        }
        else if ((display.textContent.length < 9) || (lastBtnClickedShouldReset)){
            if (operator === null){
                operand1 *= 10;
                if (operand1 >= 0){
                    operand1 += parseInt(inputNum[i].textContent);
                } 
                else{
                    operand1 -= parseInt(inputNum[i].textContent);
                }
                display.textContent = operand1;     
            }else{
                operand2 *= 10;
                if (operand2 >= 0){
                    operand2 += parseInt(inputNum[i].textContent);
                } 
                else{
                    operand2 -= parseInt(inputNum[i].textContent);
                }
                display.textContent = operand2;
            }
        }
        lastBtnClickedWasOperator = false;
    }
    
    
    
    );
}

const inputOperator = document.querySelectorAll('.operator');
for(let i = 0; i < 4; i++){
    inputOperator[i].addEventListener('click', () => {
        operator = inputOperator[i].textContent;
        operand2 = null;
        lastBtnClickedShouldReset = false;
        lastBtnClickedWasOperator = true;
    });
}

const clearAll = document.querySelector('#clear');
clearAll.addEventListener('click', () => {
    operand1 = null;
    operand2 = null;
    operator = null;
    currentTotal = null;
    display.style.fontSize = "75px";
    display.textContent = '0';
    lastBtnClickedShouldReset = true;
    lastBtnClickedWasOperator = false;
});

const performOp = document.querySelector('#equal');
performOp.addEventListener('click', () => {
    switch(operator){
        case '+':currentTotal = operand1 + operand2; break;
        case '-':currentTotal = operand1 - operand2; break;
        case '*':currentTotal = operand1 * operand2; break;
        case '/':currentTotal = operand1 / operand2; break;
    }
    if(operator == "/" && operand2 === 0){
        // display.style.fontSize = "45px";
        display.textContent = "uncool";
        lastBtnClickedShouldReset = true;
        lastBtnClickedWasOperator = false;
        currentTotal = null;
        operand1 = null;
        operand2 = null;
        operator = null;
        return;
    }
    else if (currentTotal > 999999999){
        currentTotal = 999999999;
    }
    else if (currentTotal < -999999999){
        currentTotal = -999999999;
    }
    else if ((currentTotal < 0.00000001) && (currentTotal > -0.00000001)) {
        currentTotal = 0;
    }
    if (currentTotal.toString().length >= 9) {
        let currentTotalString = currentTotal.toString();
        currentTotal = currentTotal.toExponential(5);
    }
    display.textContent = currentTotal;
    operand1 = currentTotal;
    lastBtnClickedShouldReset = true;
    lastBtnClickedWasOperator = false;
});

const negate = document.querySelector('#negate');
negate.addEventListener('click', () => {
    if(currentTotal < 0){
        operand1 = Math.abs(display.textContent);
    }else{
        operand1 = (Math.abs(display.textContent) * -1);
    }
    display.textContent = operand1;
    lastBtnClickedShouldReset = false;
    lastBtnClickedWasOperator = false;
});

const square = document.querySelector('#square');
square.addEventListener('click', () => {
    currentTotal = Math.pow(parseFloat(display.textContent), 2);
    operand1 = currentTotal;
    display.textContent = currentTotal;
    lastBtnClickedShouldReset = true;
    lastBtnClickedWasOperator = false;
});