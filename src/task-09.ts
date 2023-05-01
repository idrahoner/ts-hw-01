function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const body = document.body;
const colorEl = document.querySelector(".color") as HTMLSpanElement;
const buttonEl = document.querySelector(".change-color") as HTMLButtonElement;

buttonEl.addEventListener("click", () => {
  colorEl.textContent = getRandomHexColor();
  body.style.backgroundColor = colorEl.textContent;
});

export {};
