const inputEl = document.querySelector("#name-input") as HTMLInputElement;
const nameOutEl = document.querySelector("#name-output") as HTMLSpanElement;

inputEl.addEventListener("input", validateInput);

function validateInput(event: Event) {
  const target = event.currentTarget as HTMLInputElement;
  const inputValue = target.value.trim();

  nameOutEl.textContent = !inputValue ? "Anonymous" : inputValue;
}

export {};
