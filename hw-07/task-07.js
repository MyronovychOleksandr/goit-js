const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", (event) => {
  let rangeValue = event.target.valueAsNumber;
  textRef.style.fontSize = `${rangeValue}px`;
});
