var buttonEl = document.querySelector("button");
var num1El = document.getElementById("num1");
var num2El = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.addEventListener("click", function () {
    return console.log(add(+num1El.value, +num2El.value));
});
var age;
age = 50;
var userName;
userName = "Max";
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback;
callback = function (a) {
    return 100 + a;
};
var anything;
anything = -20;
anything = "Text";
anything = {};
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
var person;
person = ["Max", 21];
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
var page = { load: Load.LOADING };
if (page.load === Load.LOADING) {
    console.log("Page is loading");
}
if (page.load === Load.READY) {
    console.log("Page is ready");
}
var union;
var literal;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01",
    },
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
