const buttonEl = document.querySelector("button");
const num1El = document.getElementById("num1")! as HTMLInputElement;
const num2El = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

buttonEl?.addEventListener("click", () =>
  console.log(add(+num1El.value, +num2El.value))
);

let age: number;
age = 50;
let userName: string;
userName = "Max";
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback: (a: number) => number;
callback = (a) => {
  return 100 + a;
};

let anything: any;
anything = -20;
anything = "Text";
anything = {};

let some: unknown;
some = "Text";

let str: string;
if (typeof some === "string") {
  str = some;
}

let person: [string, number];
person = ["Max", 21];

enum Load {
  LOADING,
  READY,
}

const page = { load: Load.LOADING };

if (page.load === Load.LOADING) {
  console.log("Page is loading");
}

if (page.load === Load.READY) {
  console.log("Page is ready");
}

let union: string | number;

let literal: "enable" | "disable";

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

type PostType = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: PostType = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: PostType = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
