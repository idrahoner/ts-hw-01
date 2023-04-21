const buttonEl = document.querySelector("button");
const num1El = document.getElementById("num1")! as HTMLInputElement;
const num2El = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

buttonEl?.addEventListener("click", () =>
  console.log(add(+num1El.value, +num2El.value))
);
