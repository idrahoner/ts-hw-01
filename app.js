var buttonEl = document.querySelector("button");
var num1El = document.getElementById("num1");
var num2El = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.addEventListener("click", function () {
    return console.log(add(+num1El.value, +num2El.value));
});
