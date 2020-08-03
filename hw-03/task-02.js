const countProps = function (obj) {
  const objArrays = Object.keys(obj);
  const nubmerOfProperties = objArrays.length;
  return nubmerOfProperties;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
