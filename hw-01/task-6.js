let input;
let total = 0;

while (input !== null) {
  input = prompt("Укажите Ваше число.");
  total += Number(input);
  console.log(total);
}

alert(`Общая сумма чисел равна ${total}`);
