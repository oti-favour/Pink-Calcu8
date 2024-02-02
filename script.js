const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

button.forEach((button) => {
    button.addEventListener("click",(e)=>console.log(e.target.dataset.value));
});