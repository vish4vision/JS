// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null);
// console.log(0);

//console.log(null > 0);
//In JavaScript, null is a primitive value that represents the absence of an object value. In a numerical context, null is evaluated to 0, so console.log(null > 0) will always evaluate to false.

//console.log(null == 0);
//n JavaScript, console.log(null == 0) logs "false" because null and 0 are not equal. Null is a primitive JavaScript value that represents the intentional absence of an object value. In a numerical context, null is evaluated to 0, but it's treated as falsy for boolean operations.
// console.log(null >= 0);
//https://stackoverflow.com/questions/2910495/why-null-0-null-0-but-not-null-0
// console.log(typeof null);

console.log(undefined);
console.log(undefined == 0);
//n this case, console.log(undefined == 0) might return undefined because the function console.log() returns a value back to the caller, and if a return value is not specified, then the function will return undefined.
console.log(undefined > 0);
//https://stackoverflow.com/questions/24342748/why-does-console-log-say-undefined-and-then-the-correct-value
console.log(undefined < 0);

// ===

// console.log("2" === 2);
