// for of
//iterables pr lgta hai - string , array ke andr  object , array
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  //   console.log(`Each char is ${greet}`);
}

// Maps datatype

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");
map.set("Fr", "France");
//for uniqes vales only

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

//object is not a iterables tahts's why for of is not apply
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }

const myObject1 = [
  {
    game1: "NFS",
    game2: "Spiderman",
  },
  {
    game1: "NFS",
    game2: "Spiderman",
  },
  {
    game1: "NFS",
    game2: "Spiderman",
  },
];

for (const key of myObject1) {
  console.log(":-", key);
}

// give erroe
for (const [key, value] of myObject1) {
  console.log(key, ":-", value);
}
