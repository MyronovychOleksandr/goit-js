let nameContry = prompt("Укажите Вашу страну.");

while (nameContry === "" || nameContry === null) {
  nameContry = prompt("Укажите Вашу страну.");
}

let contry =
  nameContry.charAt(0).toUpperCase() + nameContry.slice(1).toLowerCase();
let price;

switch (contry) {
  case "Китай":
    price = 100;
    alert(`Доставка в ${contry} будет стоить ${price} кредитов`);
    break;

  case "Чили":
    price = 250;
    alert(`Доставка в ${contry} будет стоить ${price} кредитов`);
    break;

  case "Австралия":
    price = 170;
    alert(`Доставка в ${contry} будет стоить ${price} кредитов`);
    break;

  case "Индия":
    price = 80;
    alert(`Доставка в ${contry} будет стоить ${price} кредитов`);
    break;

  case "Ямайка":
    price = 120;
    alert(`Доставка в ${contry} будет стоить ${price} кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
    break;
}
