function add(a,b) {
    
    let sum = a+b;   
    display.textContent = sum;
    operandClicked = false;
    usersFirstInput = [''];
    operandSelected = [''];
    usersSecondInput = [''];
    return sum; 
    

}

function subtract(a,b) {

    let difference = a-b;
    display.textContent = difference;
    operandClicked = false;
    usersFirstInput = '';
    operandSelected = '';
    usersSecondInput = '';
    return difference;
}

function multiply(a,b) {
    
    let product = a*b;
    display.textContent = product;
    operandClicked = false;
    usersFirstInput = '';
    operandSelected = '';
    usersSecondInput = '';
    return product;
}

function divide(a,b) {

    let quotient = a/b;
    display.textContent = quotient;
    operandClicked = false;
    usersFirstInput = '';
    operandSelected = '';
    usersSecondInput = '';
    return quotient;
}

//Variable for 1st number selected by the user
let usersFirstInput = [''];
//Variable for the operand selected by the user
let operandSelected = [];
//Variable for 2nd number selected by the user
let usersSecondInput = [''];

function operate(operator, num1, num2){

    let number1 = parseInt(num1[0]);
    let number2 = parseInt(num2[0]);


    if (operator === 'add') {
        return add(number1,number2)
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


const clicked = 0;
let equalWasClicked = false;
let operandClicked = false;


number.addEventListener('click', (e)=>{
    
    if(equalWasClicked === true){
        display.textContent = '';
        equalWasClicked = false

    }
    
    //this means a number was just clicked operand has not been clicked
    else if(operandClicked === false){
       
        //let digitID = e.target.id;
        var selectedValue = document.getElementById(`${e.target.id}`);
    
        display.textContent = usersFirstInput;
        display.textContent += `${selectedValue.innerHTML}`;
        //this is where we will store the number that was clicked

        usersFirstInput[0] = usersFirstInput[0] + selectedValue.innerHTML
        //usersFirstInput.push(selectedValue.innerHTML);

        console.log(`firstInput: ${usersFirstInput}`);
        console.log(usersFirstInput);
    }
    
    //operand has been clicked
    else {

        let digitID = e.target.id;
        var selectedValue = document.getElementById(`${digitID}`);
        display.textContent = usersSecondInput;
        display.textContent += `${selectedValue.innerHTML}`;
        //this is where we will store the number that was clicked
        usersSecondInput[0] = usersSecondInput[0] + selectedValue.innerHTML


        console.log(`secondInput: ${usersSecondInput}`);
        console.log(usersSecondInput);
    }    
})




operand.addEventListener('click', (e)=>{

    //There is no reason to store an operand if the first value has not been selected by the user
    if(usersFirstInput === []){
        operandSelected = [];
        operandClicked = false;
    }

    //this means the operand has been selected and first equation has been already set its assumed the second input has been selected
    else if(operandClicked === true){

        let newValue = operate(operandSelected[0], usersFirstInput[0], usersSecondInput[0]);
        //remove 1st value stored in usersFirstInput then add new value
        usersFirstInput[0]= newValue;
        //usersFirstInput.push(newValue);
        
        console.log(usersFirstInput)

        let operandID = e.target.id;
        var selectedOperand = document.getElementById(`${operandID}`);
        display.textContent = newValue;
        operandSelected = operandID;
        console.log(operandSelected);
        operandClicked = true;
    }


    else{
        operandClicked = true;
        

        let operandID = e.target.id;
        var selectedOperand = document.getElementById(`${operandID}`);
        display.textContent = selectedOperand.innerHTML;
        operandSelected.push(operandID);
        console.log(operandSelected);
    }
    

})



calculate.addEventListener('click', (e)=>{

    equalWasClicked = true;

    if(usersFirstInput != [] && operandSelected != [] && usersSecondInput != []){
        console.log(true)
        operate(operandSelected, usersFirstInput, usersSecondInput);
    }
})



clear.addEventListener('click', ()=>{

    display.textContent = [];
    usersFirstInput = [];
    operandSelected = [];
    usersSecondInput = [];

})
