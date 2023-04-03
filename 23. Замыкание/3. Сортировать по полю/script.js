let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

// по имени (Ann, John, Pete)
// console.log(users.sort((a, b) => a.name > b.name ? 1 : -1));

// по возрасту (Pete, Ann, John)
// console.log(users.sort((a, b) => a.age > b.age ? 1 : -1));


// console.log(users.sort(byField("name")))
// console.log(users.sort(byField("age")));

// function byField(fieldName) {
//   return function (a, b) {
//     if (typeof a[fieldName] == "string") {
//       return a[fieldName].localeCompare(b[fieldName]);
//     } else {
//       return a[fieldName] > b[fieldName] ? 1 : -1;
//     }
//   };
// }


function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

users.sort(byField('name'));
users.forEach(user => alert(user.name)); // Ann, John, Pete

users.sort(byField('age'));
users.forEach(user => alert(user.name)); // Pete, Ann, John