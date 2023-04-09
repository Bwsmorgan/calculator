function add(a,b) {
    
    let sum = a+b;   
    display.textContent = sum;
    console.log(`result ${sum}`)
    // this value should become the firstInput
    
    reset();
    console.log(`usersFirstInput ${usersFirstInput}`)
    console.log(`usersSecondInput ${usersSecondInput}`)

    console.log(operandSelected)

    //usersFirstInput[0]= sum;
    //reset();
}

function subtract(a,b) {

    let difference = a-b;
    display.textContent = difference;
    console.log(`result ${difference}`)
    // this value should become the firstInput
    usersFirstInput = [difference];

    reset();
    
    console.log(`usersFirstInput ${usersFirstInput}`)
    console.log(`usersSecondInput ${usersSecondInput}`)

    console.log(operandSelected)
}

function multiply(a,b) {
    
    let product = a*b;
    display.textContent = product;
    console.log(`result ${product}`)
    // this value should become the firstInput
    usersFirstInput = [product];
    reset();
    console.log(`usersFirstInput ${usersFirstInput}`)
    console.log(`usersSecondInput ${usersSecondInput}`)

    console.log(operandSelected)
}

function divide(a,b) {

    if (b === 0){
        display.textContent = "You cannot use zero as a divisor";
        reset();
    }
    else{
        let quotient = a/b;
        display.textContent = quotient;
        

        console.log(`result ${quotient}`)
        // this value should become the firstInput
        usersFirstInput = [quotient];

        reset();
        
        console.log(`usersFirstInput ${usersFirstInput}`)
        console.log(`usersSecondInput ${usersSecondInput}`)

        console.log(operandSelected)
    }
    
}


//Variable for 1st number selected by the user
var usersFirstInput = [''];
//Variable for the operand selected by the user
var operandSelected = [];
//Variable for 2nd number selected by the user
var usersSecondInput = [''];


function operate(operator, num1, num2){

    switch(operator){
        case 'add':
            return add(parseInt(num1),parseInt(num2));
            break;
        case 'subtract':
            return subtract(parseInt(num1),parseInt(num2));
            break;
        case 'multiply':
            return multiply(parseInt(num1),parseInt(num2));
            break;
        case 'divide':
            return divide(parseInt(num1),parseInt(num2));
            break;
        default:
            console.log('error');
    }
}


const number = document.querySelector('.digits');
const display = document.querySelector('#display');
const operand = document.querySelector('.operands');
const calculate = document.querySelector('#equals');
const clear = document.querySelector('#clear');

let equalWasClicked = false;
let operandClicked = false;


number.addEventListener('click', (e)=>{
    
    if(equalWasClicked === true){

        display.textContent = '';
        equalWasClicked = false

    }
    
    //this means a number was just clicked operand has not been clickeds
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

    //first time operand has been clicked
    else if(operandClicked === false){

        operandClicked = true;

        var operandID = e.target.id;
        var selectedOperand = document.getElementById(`${operandID}`);
        display.textContent = selectedOperand.innerHTML;
        operandSelected.push(operandID);
        console.log(operandSelected);
        
    }
    
    
    else{

        operate(operandSelected[0], usersFirstInput[0], usersSecondInput[0]);
        //remove 1st value stored in usersFirstInput then add new value
        //usersFirstInput[0] = display.textContent;
        usersFirstInput[0] = usersFirstInput[0] + display.textContent
        console.log(`firstInput:${usersFirstInput}`)
        console.log(usersFirstInput)
    

        var operandID = e.target.id;
        var selectedOperand = document.getElementById(`${operandID}`);
        display.textContent = usersFirstInput + selectedOperand.innerHTML;
        operandSelected.push(operandID);
        
        console.log(operandSelected);
        operandClicked = true;
    }  
})



calculate.addEventListener('click', (e)=>{

    equalWasClicked = true;

    //our arrays must have values in order to calculate
    if(usersFirstInput != [] && operandSelected != [] && usersSecondInput != []){
        operate(operandSelected[0], usersFirstInput[0], usersSecondInput[0]);
        usersFirstInput[0] = display.textContent;

        console.log(usersFirstInput[0])

    }
    //reset();
})



clear.addEventListener('click', ()=>{

    //equalWasClicked = true;
    display.textContent = [];
    //usersFirstInput = ['']
    reset();
})


function reset(){

    operandClicked = false;
    operandClicked = false;
    equalWasClicked = false;
    usersFirstInput = [''];
    operandSelected = [];
    usersSecondInput = [''];
}
