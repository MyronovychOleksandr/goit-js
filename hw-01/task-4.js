let credits = 23580;
const pricePerDroid = 3000;
let numberOfDroid = prompt("Сколько дронов Вы хотите  купить?");

if (numberOfDroid === null) {
  alert("Отменено пользователем!");
} else {
  let totalPrice = pricePerDroid * numberOfDroid;

  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    let balance = credits - totalPrice;
    alert(
      `Вы купили ${numberOfDroid} дроидов, на счету осталось ${balance} кредитов.`
    );
  }
}
