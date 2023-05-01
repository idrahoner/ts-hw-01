const sliderEl = document.querySelector(
  "#font-size-control"
) as HTMLInputElement;
const textEl = document.querySelector("#text") as HTMLSpanElement;

textEl.style.fontSize = sliderEl.value + "px";

sliderEl.addEventListener("input", (event: Event) => {
  const element = event.currentTarget as HTMLInputElement;
  textEl.style.fontSize = element.value + "px";
});
