const inputEl = document.querySelector("#name-input");
const nameOutEl = document.querySelector("#name-output");
inputEl.addEventListener("input", validateInput);
function validateInput(event) {
    const target = event.currentTarget;
    const inputValue = target.value.trim();
    nameOutEl.textContent = !inputValue ? "Anonymous" : inputValue;
}
export {};
//# sourceMappingURL=task-05.js.map