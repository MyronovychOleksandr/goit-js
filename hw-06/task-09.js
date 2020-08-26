import users from "./users.js";

const getNamesSortedByFriendsCount = (users) => {
  return users
    .map(function (user) {
      return {
        ...user,
        numberOfFriends: user.friends.length,
      };
    })
    .sort(function (a, b) {
      return a.numberOfFriends - b.numberOfFriends;
    })
    .map(function (user) {
      return user.name;
    });
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
