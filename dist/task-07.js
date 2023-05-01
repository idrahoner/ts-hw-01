"use strict";
const sliderEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = sliderEl.value + "px";
sliderEl.addEventListener("input", (event) => {
    const element = event.currentTarget;
    textEl.style.fontSize = element.value + "px";
});
//# sourceMappingURL=task-07.js.map