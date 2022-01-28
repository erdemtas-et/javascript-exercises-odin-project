const findTheOldest = function (arr) {
  const year = new Date().getFullYear(); //Today's date

  let maxAge = 0; // find the oldest person
  arr.forEach((item) => {
    if (item.yearOfDeath !== undefined) {
      const age = item.yearOfDeath - item.yearOfBirth;
      if (age > maxAge) {
        maxAge = age;
      }
    } else {
      item.yearOfDeath = year;
      const age = year - item.yearOfBirth;
      if (age > maxAge) {
        maxAge = age;
      }
    }
  });

  const getOldestPerson = arr.find((item)=> {
    const age = item.yearOfDeath - item.yearOfBirth;
      return age === maxAge
  })

  return getOldestPerson
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
console.log(findTheOldest(people));

module.exports = findTheOldest;
