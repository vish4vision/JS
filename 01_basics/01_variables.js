const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState = null;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// twitter question
// const arr = [1, 2, 3, 4, 5];
// const slicedArr = arr.slice(1, 2);
// console.log("slicedArr", slicedArr);
// // const ans = arr.splice(1, 2);
// // console.log("splice", ans);
// arr.splice(1, 2, ...slicedArr);
// console.log(arr);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
