const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc-com");
console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(1, 4);
//console.log(anotherString);

// const splicedstring = gameName.splice(1, 4);
// console.log(splicedstring);
//No, the splice() method is not suitable for strings because strings are immutable. The splice() method is a built-in JavaScript method for array objects that lets you add or remove elements from an array, or replace existing elements with new ones. It modifies the original array and returns the removed elements as a new array.

const newStringOne = "   hitesh    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

//console.log(url.replace("%20", "-"));

//console.log(url.includes("sundar"));

//console.log(gameName.split("-"));
