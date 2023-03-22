function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

//Variable for 1st number selected by the user
let usersFirstInput 
//Variable for the operand selected by the user
let operandSelected 
//Variable for 2nd number selected by the user
let usersSecondInput

function operate(operator, num1, num2){

    if (operator === 'add') {
        add(num1,num2)
    }
    else if (operator === 'subtract') {
        subtract(num1,num2)
    }
    else if (operator === 'multiply') {
        multiply(num1,num2)
    }
    else if (operator === 'divide') {
        divide(num1,num2)
    }
}

const number = document.querySelector('.digits');
const display = document.querySelector('#display')
let numberSelected = 0;

number.addEventListener('click', (e)=>{
    let digitID = e.target.id;
    var selectedValue = document.getElementById(`${digitID}`)
    display.textContent = selectedValue.innerHTML;
    //this is where we will store the number that was clicked
    numberSelected = digitID;
    console.log(digitID);

})