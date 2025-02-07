let number1 = "", number2 = "", firstoperator, secondoperator
let numberbuttons = document.querySelectorAll(".numbut")
let opbuttons = document.querySelectorAll(".opbut")
console.log("Main.js loaded")
document.querySelectorAll(".opbut").forEach(button => {
    button.addEventListener("click", function(event){
        operatorButPress(event);
    });
});
let equals = document.querySelector("#equals")
console.log(equals)
equals.addEventListener("click", equalbutpress)
// 77 + 2 +

function numButPress(numberid){
    let idarr = numberid.split('')
    let number = idarr[1]
    console.log(number)
    if (firstoperator == undefined){
        number1 = number1 + number
        console.log("number 1 is: " + number1)
    }
    if (firstoperator){
        number2 = number2 + number
        console.log("Number 2 is: " + number2)
    }
}

function equalbutpress(){
    if (number1 && number2 && firstoperator){
        let result = operate(number1,number2,firstoperator)   
        console.log(result)     
        number1 = result
        number2 = ""
    }
}

function operatorButPress(event){
    let op = event.target.getAttribute("data-op")
    if (number1 && number2 && firstoperator){
        let secondoperator = op
        equalbutpress()
        firstoperator = secondoperator
        return
    }
    
    firstoperator = op
    console.log(firstoperator)
}

function add(num1,num2){
    return num1 + num2
}
function subtract(num1,num2){
    return num1 - num2
}
function multiply(num1,num2){
    return num1 * num2
}
function divide(num1,num2){
    return num1 / num2
}
function operate(number1, number2, operator){
   let number1num = Number(number1)
   let number2num = Number(number2)
   
    if (operator == "+"){
        return add(number1num,number2num)
    }
    if (operator == "-"){
        return subtract(number1num,number2num)
    }
    if (operator == "*"){
        return multiply(number1num,number2num)
    }
    if (operator == "/") {
        if (number2num == 0) {
            console.log("LMAO")
            return "LMAO"
        }
        return divide(number1num,number2num)
    }
}
console.log("TEST")
