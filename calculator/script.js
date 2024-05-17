console.log("hii");
let resultInput=document.querySelector(".display")
let buttons=document.querySelectorAll(".number")
let operators=document.querySelectorAll(".operator")
let clearButton=document.querySelector(".clear")
let calculateBtn=document.querySelector(".calculate")


// console.log(resultInput,"resultInput");
// console.log(buttons,"buttons");
// console.log(operators,"operators");
// console.log(clearButton,"clearButton");
// console.log(calculateBtn,"calculateBtn");

buttons.forEach((button)=>{
console.log(button);
button.addEventListener("click",()=>{
    resultInput.value=resultInput.value+button.innerText
    console.log(resultInput.value,"resultInput.value");
})
})








