let display = document.querySelector("#screen")
let number1 = "", number2 = "", firstoperator, secondoperator
let numberbuttons = document.querySelectorAll(".numbut")
let opbuttons = document.querySelectorAll(".opbut")
let clearall = document.querySelector("#ClearAll")
let decimalbutton = document.querySelector("#Decimal")
let nTOp = document.querySelector("#nTOp")
let BackOne = document.querySelector("#BackOne")
console.log("Main.js loaded")
// Logic variables and DOM elements
document.querySelectorAll(".opbut").forEach(button => {
    button.addEventListener("click", function(event){
        operatorButPress(event);
    });
});
// above adds event listeners to operators
let equals = document.querySelector("#equals")
console.log(equals)
equals.addEventListener("click", equalbutpress)
clearall.addEventListener("click",clearallf)
decimalbutton.addEventListener("click",dottyboy)
nTOp.addEventListener("click",Opposite)
BackOne.addEventListener("click",backonefunc)
window.addEventListener("keydown",keysupport)


// 77 + 2 +

function keysupport(HUNTINGHIGHANDLOW){
    console.log("A key was pressed!")
    console.log(HUNTINGHIGHANDLOW.code)
    if (HUNTINGHIGHANDLOW.code == "Digit0"){
        console.log("Truly i tell you the digit called zero was clicked.")
    }
    switch (HUNTINGHIGHANDLOW.code){
        case "Digit1":
            numButPress("n1")
            break;
        case "Digit2":
            numButPress("n2")   
            break;
        case "Digit3":
            numButPress("n3")
            break;
        case "Digit4":
            numButPress("n4")  
            break;
        case "Digit5":
            numButPress("n5")
            break;
        case "Digit6":
            numButPress("n6") 
            break;  
        case "Digit7":
            numButPress("n7")
            break;
        case "Digit8":
            numButPress("n8")  
            break;
        case "Digit9":
            numButPress("n9")
            break;
        case "Digit0":
            numButPress("n0")
            break;
        case "Backspace":
            backonefunc()
            break;
        case "Minus":
            operatorButPress("Minus")

    }

    
}

function backonefunc(){
    if (firstoperator == undefined){
        let brokenupstring = number1.split('')
        let pushed = brokenupstring.pop()
        let joined = brokenupstring.join('')
        number1 = joined
        updatedisplay()
    } 
    if (firstoperator){
        let brokenupstring = number2.split('');
        let pushed = brokenupstring.pop();
        let joined = brokenupstring.join('')
        number2 = joined
        updatedisplay()
    }
}

function Opposite(){
    if (firstoperator == undefined){
        let number1num = Number(number1)
        if (number1num > 0){
            number1 = "-" + number1
        } else {
            let testy = number1num * -1
            let stringtesty = testy.toString()
            number1 = stringtesty
        }

    }
    if (firstoperator){
        let number2num = Number(number2)
        if (number2num > 0){
            number2 = "-" + number2
        } else {
            let testy = number2num * -1
            let stringtesty = testy.toString()
            number2 = stringtesty
        }
    }
    updatedisplay()
}

function uniqueunorq(str){
    let sta = str.split('')
    let unique = []
    for(let txt in sta){
        unique.push(sta[txt])
    }
    for(let str in unique){
        if (unique.includes(".")){
           console.log("decimal found")
           return false
        }
    }

    return true
}

function dottyboy(){
    if (firstoperator == undefined){
        let totallytubularboolean1 = uniqueunorq(number1)
        if (totallytubularboolean1 == true){
            number1 = number1 + "."
            console.log("number 1 is: " + number1)
        }
    }
    if (firstoperator){
        let totallytubularboolean2 = uniqueunorq(number2)
        if (totallytubularboolean2 == true){
            number2 = number2 + "."
            console.log("number 2 is: " + number2)
        }
    }
    updatedisplay()
}

function clearallf(){
    number1 = ""
    number2 = ""
    firstoperator = undefined
    secondoperator = undefined
    display.innerHTML = "0"
}
function numButPress(numberid){
    if (display.innerHTML.length >= 10 && 20 >= display.innerHTML.length) {
        console.log(display.innerHTML.length)
        console.log("Over")
        return
    }
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
    updatedisplay()
}
// anytime 0-9 is pressed
function equalbutpress(){
    if (number1 && number2 && firstoperator){
        let result = operate(number1,number2,firstoperator)   
        console.log("The Result is: " + result)     
        number1 = result
        number2 = ""
        updatedisplay()
    }
}

function operatorButPress(event){
    if (event == "Minus") {
        if (number1 && number2 && firstoperator){
            secondoperator = "-"
            return
        } else {
            firstoperator = "-"
            return
        }
    }
    if (event == "Slash") {
        if (number1 && number2 && firstoperator){
            secondoperator = "/"
            return
        } else {
            firstoperator = "/"
            return
        }
    }
    let op = event.target.getAttribute("data-op")
    if (number1 && number2 && firstoperator){
        let secondoperator = op
        equalbutpress()
        firstoperator = secondoperator
        return
    }
    
    firstoperator = op
    console.log(firstoperator)
    updatedisplay()
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


function updatedisplay(){
    if (!firstoperator) {
        display.innerHTML = number1
    } else if (!number2 == "") {
        display.innerHTML = number2
    } else {
        display.innerHTML = number1
    }
}

console.log("TEST")




// Just for future me i Wrote 100% (Not the event listener part lol but it ws 3 lines, stack overflow had it and i was lazy:( )of this but understand absolutely none of it :). So how was trumps term? Is the world gone?
