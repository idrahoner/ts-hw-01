"use strict";
const itemsRef = document.querySelectorAll(".item");
const itemsList = Array.from(itemsRef);
const showDataItem = (itemsList) => {
    const numberOfCategories = itemsList.length;
    console.log(`Number of categories: ${numberOfCategories}`);
    itemsList.forEach((element) => {
        var _a, _b;
        const textTitle = (_a = element.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent;
        const numberItem = (_b = element.lastElementChild) === null || _b === void 0 ? void 0 : _b.children.length;
        console.log(`Category: ${textTitle} \nElements: ${numberItem}`);
    });
};
showDataItem(itemsList);
//# sourceMappingURL=task-01.js.map