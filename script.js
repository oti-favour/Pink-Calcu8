const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");
const specialChars =["%","*", "/", "-", "+", "="]


const calculate = (btnValue) => {

    display.value= output;
}

button.forEach((button) => {
    button.addEventListener("click",(e)=>calculate(e.target.dataset.value));
});