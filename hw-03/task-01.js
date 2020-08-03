const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,

  //   updateHobby(newHobby) {
  //     this.hobby = newHobby;
  //   },
  //   updatePremium(newPremium) {
  //     this.premium = newPremium;
  //   },
};
//user.updateHobby("skydiving");
// user.updatePremium(false);
// console.log(user);

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
console.log(user);

let keys = Object.keys(user);
console.log(keys);

for (const key of keys) {
  console.log(`${key}:${user[key]}`);
}
