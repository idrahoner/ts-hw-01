const inputEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const boxesStoreEl = document.querySelector("#boxes");
buttonCreateEl.addEventListener("click", () => {
    createBoxes(Number(inputEl.value));
});
buttonDestroyEl.addEventListener("click", destroyBoxes);
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
}
function createBoxes(amount) {
    if (amount < 0 || amount > 100) {
        return alert("Range from 0 to 100");
    }
    boxesStoreEl.innerHTML = buildBoxes(amount);
}
function buildBoxes(number) {
    let size = 30;
    const boxList = [];
    for (let i = 0; i < number; i += 1) {
        const boxEl = `
    <div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>
    `;
        size += 10;
        boxList.push(boxEl);
    }
    return boxList.join("");
}
function destroyBoxes() {
    boxesStoreEl.innerHTML = "";
    inputEl.value = "";
}
export {};
//# sourceMappingURL=task-10.js.map