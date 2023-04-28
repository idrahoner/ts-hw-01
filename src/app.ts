import { sum } from "./sum";

const buttonEl = document.querySelector("button")!;
const num1El = document.getElementById("num1")! as HTMLInputElement;
const num2El = document.getElementById("num2")! as HTMLInputElement;

buttonEl.addEventListener("click", () =>
  console.log(sum(+num1El.value, +num2El.value))
);
