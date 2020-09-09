/**
 * Constants and Button Capture
 */

const buttonNumber = document.getElementsByName("data-number");
const buttonOpera = document.getElementsByName("data-opera");
const buttonEqual = document.getElementsByName("data-equal")[0];
const buttonDelete = document.getElementsByName("data-delete")[0];
let result = document.getElementById('result');
let currentOp = '';
let lastOp = '';
let operation = undefined;

buttonNumber.forEach(function(button){
    button.addEventListener('click', function(){
       addNumber(button.innerText);
    })
});

buttonOpera.forEach(function(button){
    button.addEventListener('click', function(){
        selectOperation(button.innerText);
    })
});

buttonEqual.addEventListener('click',function(){
    calculate();
    refreshDisplay();
});

buttonDelete.addEventListener('click', function(){
    clear();
    refreshDisplay();
});


/*******************************/

/**
 * Internal Logic
 */

 function addNumber(num){
     currentOp = currentOp.toString() + num.toString();
     refreshDisplay();
    }

 function selectOperation(op){
    if(currentOp == '') return;
    if(currentOp !== ''){
        calculate();
    }

    operation = op.toString();
    lastOp = currentOp;
    currentOp = '';
    }

 function calculate(){
     let calc;
     const last = parseFloat(lastOp);
     const current = parseFloat(currentOp);

     if(isNaN(last) || isNaN(current)) return;
     switch(operation){
         case '+':
             calc = last + current;
             break;
         case '-':
             calc = last - current;
             break;
         case 'x':
             calc = last * current;
             break;
         case '/':
             calc = last / actual;
             break;
         default:
             return;
     }
     currentOp = calc;
     operation = undefined;
     lastOp = '';
    }

 function refreshDisplay(){
    result.value = currentOp;
    }

 function clear(){
    currentOp = '';
    lastOp = '';
    operation = undefined;
    }

clear();