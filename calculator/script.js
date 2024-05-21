console.log("hii");
let resultInput=document.querySelector(".display")
let buttons=document.querySelectorAll(".number")
let operators=document.querySelectorAll(".operator")
let clearButton=document.querySelector(".clear")
let calculateBtn=document.querySelector(".calculate")

buttons.forEach((button)=>{
console.log(button);
button.addEventListener("click",()=>{
    resultInput.value=resultInput.value+button.innerText
    // console.log(resultInput.value,"resultInput.value");
})
})
operators.forEach((operator)=>{
    operator.addEventListener("click",()=>{
        resultInput.value=resultInput.value+operator.innerText
        // console.log(resultInput.value,"resultInput.value");
    })
})
calculateBtn.addEventListener("click",()=>{
try {
    // throw new error("error")
    // let calculatedResult=eval(resultInput.value)
    // resultInput.value=calculatedResult 
} catch (error) {
    resultInput.value="sibla" 
}
})


clearButton.addEventListener("click",()=>{
    resultInput.value="" 
})
















