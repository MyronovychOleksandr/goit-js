const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let pass = prompt("Enter your password please");

if (pass === null) {
  message = "Отменено пользователем!";
} else if (pass === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
