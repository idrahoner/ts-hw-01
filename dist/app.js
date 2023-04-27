"use strict";
const buttonEl = document.querySelector("button");
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
function sum(n1, n2) {
    return n1 + n2;
}
buttonEl.addEventListener("click", () => console.log(sum(+num1El.value, +num2El.value)));
//# sourceMappingURL=app.js.map