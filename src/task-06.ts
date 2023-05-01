const inputEl = document.querySelector("#validation-input") as HTMLInputElement;
const requestedLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", checkValid);

function checkValid(event: Event) {
  const element = event.currentTarget as HTMLInputElement;
  const currentLength = element.value.length;

  element.classList.remove("valid", "invalid");

  return currentLength === requestedLength
    ? element.classList.add("valid")
    : element.classList.add("invalid");
}

export {};
