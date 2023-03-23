function add(a,b) {
    console.log(a)
    console.log(a)

    let sum = a+b;
    console.log(sum);
    
    display.textContent = sum;
    operandClicked = false;
}

function subtract(a,b) {

    let difference = a-b;
    display.textContent = difference;
    operandClicked = false;
}

function multiply(a,b) {
    
    let product = a*b;
    display.textContent = product;
    operandClicked = false;
}

function divide(a,b) {

    let quotient = a/b;
    display.textContent = quotient;
    operandClicked = false;
}

//Variable for 1st number selected by the user
let usersFirstInput = '';
//Variable for the operand selected by the user
let operandSelected = '';
//Variable for 2nd number selected by the user
let usersSecondInput = '';

function operate(operator, num1, num2){

    let number1 = parseInt(num1);
    let number2 = parseInt(num2);


    if (operator === 'add') {
        console.log('yes')
        add(number1,number2)
    }
    else if (operator === 'subtract') {
        console.log('yes')
        subtract(number1,number2)
    }
    else if (operator === 'multiply') {
        console.log('yes')
        multiply(number1,number2)
    }
    else if (operator === 'divide') {
        console.log('yes')
        divide(number1,number2)
    }
}

const number = document.querySelector('.digits');
const display = document.querySelector('#display');
const operand = document.querySelector('.operands');
const calculate = document.querySelector('#equals');
const clear = document.querySelector('#clear');



number.addEventListener('click', (e)=>{

    if(operandClicked === false){
       
        let digitID = e.target.id;
        var selectedValue = document.getElementById(`${digitID}`);
        display.textContent += `${selectedValue.innerHTML}`;
        //this is where we will store the number that was clicked
        usersFirstInput += selectedValue.innerHTML;
        console.log(usersFirstInput);
        console.log(digitID);
    }

    else {
        
        let digitID = e.target.id;
        var selectedValue = document.getElementById(`${digitID}`);
        display.textContent += `${selectedValue.innerHTML}`;
        //this is where we will store the number that was clicked
        usersSecondInput += selectedValue.innerHTML;
        console.log(usersSecondInput);
        console.log(digitID);
    }    
})


let operandClicked = false;

operand.addEventListener('click', (e)=>{

    operandClicked = true;
    console.log("operand active")

    let operandID = e.target.id;
    var selectedOperand = document.getElementById(`${operandID}`);
    display.textContent = selectedOperand.innerHTML;
    operandSelected = operandID;
    console.log(operandSelected);

})

calculate.addEventListener('click', (e)=>{

    if(usersFirstInput != '' && operandSelected != '' && usersSecondInput != ''){
        console.log(true)
        operate(operandSelected, usersFirstInput, usersSecondInput);
    }

})

clear.addEventListener('click', ()=>{

    display.textContent = '';
    usersFirstInput = '';
    operandSelected = '';
    usersSecondInput = '';

})
