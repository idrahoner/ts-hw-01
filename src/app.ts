const buttonEl = document.querySelector("button")!;
const num1El = document.getElementById("num1")! as HTMLInputElement;
const num2El = document.getElementById("num2")! as HTMLInputElement;

function sum(n1: number, n2: number): number {
  return n1 + n2;
}

buttonEl.addEventListener("click", () =>
  console.log(sum(+num1El.value, +num2El.value))
);
