const marvel_heros = ["thor", "Ironman", "spiderman"];

const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log("🚀 ~ marvel_heros:", dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

//console.log(Array.isArray("Hitesh"));
//The Array.isArray() static method determines whether the passed value is an Array.
// console.log(Array.from("Hitesh"));
//The Array.from() method returns an array from any object with a length property.
//The Array.from() method returns an array from any iterable object.
//console.log(Array.from({ name: "hitesh" })); // interesting  -> https://chatgpt.com/c/895cf216-2034-439e-a253-a9228f3c5061

//gpt solution
//he Array.from method in JavaScript is used to create a new array instance from an array-like or iterable object. The argument { name: "hitesh" } is neither an array-like object nor an iterable. Hence, Array.from creates an empty array.

//An array-like object is an object that has a length property and indexed elements. For example:

//javascript
//Copy code
//Array.from({ length: 2, 0: 'a', 1: 'b' }); // ['a', 'b']
//An iterable object is an object that can be iterated over, like strings or arrays.

//Since { name: "hitesh" } does not meet these criteria, Array.from does not find anything to include in the array, resulting in an empty array [].

//Here's a breakdown of what you intended and why it didn't work:

//Array-like object: An object with a length property and indexed elements. For example:

//javascript
//Copy code
//const arrayLike = { length: 2, 0: "a", 1: "b" };
//console.log(Array.from(arrayLike)); // ['a', 'b']
//Iterable object: An object that implements the iterable protocol (has a Symbol.iterator method), like arrays, sets, or strings. For example:

//javascript
//Copy code
//const iterable = "hello";
//console.log(Array.from(iterable)); // ['h', 'e', 'l', 'l', 'o']
//Your object { name: "hitesh" } is neither of these, so Array.from returns an empty array.

//If you want to convert the object's values to an array, you can use Object.values:

//javascript//
//Copy code
//const obj = { name: "hitesh" };
//console.log(Object.values(obj)); // ['hitesh']
//Or if you want to convert both keys and values to an array, you can use Object.entries:

//javascript
//Copy code
//const obj = { name: "hitesh" };
//console.log(Object.entries(obj)); // [['name', 'hitesh']]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
