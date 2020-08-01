const checkForSpam = function (message) {
  let result;
  let messageLower = message.toLowerCase();

  if (messageLower.includes("spam") || messageLower.includes("sale")) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
