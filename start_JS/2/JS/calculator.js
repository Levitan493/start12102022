
let firstNumber = parseFloat(prompt('Type number', 0));
let secondNumber = parseFloat(prompt('Type number', 0));
let operationNumber = prompt('Operation');
let result = 0;
if(operationNumber == '+'){
    result = firstNumber + secondNumber;
    console.log('Plus value', result);
}
else if(operationNumber == '-'){
    result = firstNumber - secondNumber;
    console.log('Minus value', result);
}
else if(operationNumber == '*'){
    result = firstNumber * secondNumber;
    console.log('Multiplie value', result);
}
else if(operationNumber == '/'){
    result = firstNumber / secondNumber;
    console.log('Fraction value', result);
}
if(secondNumber == 0 && operationNumber == '/'){
    alert('Operation is not value');
}