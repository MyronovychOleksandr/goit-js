import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  return users
    .reduce(function (skills, user) {
      skills.push(...user.skills);
      return skills;
    }, [])
    .reduce(function (skills, skill) {
      if (!skills.includes(skill)) {
        skills.push(skill);
      }
      return skills;
    }, [])
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
