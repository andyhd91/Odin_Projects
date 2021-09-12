//Functions

//basic math operators
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const operate = (operator, a, b) =>{
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '/':
            if(b === 0) return null;
            else return divide(a,b);
        default:
            return null;
    }
}


console.log(operate(add(10, 5)));
//console.log(subtract(10, 5));
//console.log(multiply(10, 5));
//console.log(divide(10, 5));