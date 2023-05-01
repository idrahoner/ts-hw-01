let counterValue = 0;
const counterEl = document.querySelector("#value") as HTMLSpanElement;

const btnDecrement = document.querySelector(
  "[data-action = 'decrement']"
) as HTMLButtonElement;
const btnIncrement = document.querySelector(
  "[data-action = 'increment']"
) as HTMLButtonElement;

btnDecrement.addEventListener(
  "click",
  () => (counterEl.textContent = String((counterValue -= 1)))
);
btnIncrement.addEventListener(
  "click",
  () => (counterEl.textContent = String((counterValue += 1)))
);
