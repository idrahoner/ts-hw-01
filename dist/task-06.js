const inputEl = document.querySelector("#validation-input");
const requestedLength = Number(inputEl.dataset.length);
inputEl.addEventListener("blur", checkValid);
function checkValid(event) {
    const element = event.currentTarget;
    const currentLength = element.value.length;
    element.classList.remove("valid", "invalid");
    return currentLength === requestedLength
        ? element.classList.add("valid")
        : element.classList.add("invalid");
}
export {};
//# sourceMappingURL=task-06.js.map