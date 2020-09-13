const valueRef = document.querySelector("#value");
let valueContentRef = Number(valueRef.textContent);

const increment = function () {
  valueContentRef = valueContentRef + 1;
  valueRef.textContent = valueContentRef;
};

const decrement = function () {
  valueContentRef = valueContentRef - 1;
  valueRef.textContent = valueContentRef;
};

const incrementButtonRef = document.querySelector(
  'button[data-action="increment"]'
);
incrementButtonRef.addEventListener("click", increment);

const decrementButtonRef = document.querySelector(
  'button[data-action="decrement"]'
);
decrementButtonRef.addEventListener("click", decrement);
