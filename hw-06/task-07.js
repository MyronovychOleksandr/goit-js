import users from "./users.js";

const calculateTotalBalance = (users) => {
  return users
    .map(function (user) {
      return user.balance;
    })
    .reduce(function (acc, value) {
      return acc + value;
    });
};

console.log(calculateTotalBalance(users)); // 20916
