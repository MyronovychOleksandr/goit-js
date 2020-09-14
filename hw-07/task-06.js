const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {
  let valueLength = Number(event.target.value.length);
  const datasetLength = Number(event.target.dataset.length);

  if (valueLength === datasetLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
});
