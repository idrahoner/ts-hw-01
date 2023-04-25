"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("./sum");
const buttonEl = document.querySelector("button");
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
buttonEl.addEventListener("click", () => console.log((0, sum_1.sum)(+num1El.value, +num2El.value)));
//# sourceMappingURL=app.js.map