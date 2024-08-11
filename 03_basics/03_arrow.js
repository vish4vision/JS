const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// const chai2 = function () {
//   let username = "hitesh";
//   console.log(this);
// };
// chai2();

// console.log(this); //empty object bcz node environment // fro brower window

function chai1() {
  let username = "hitesh";

  console.log("this username", this.username);
  //   ese use nhi kr payge function m sirf object m kr skte h
  //https://chatgpt.com/c/8f595675-2e33-4dbb-8e91-3a68ce3bfed8
}

// const chai = function () {
//   let username = "hitesh";
//   console.log(this.username);
// };

// const chai = () => {
//   let username = "hitesh";
//   console.log(this);
// arrow m this use nhi kr skte
// };

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;  -> explict return
// };
// console.log(addTwo(3, 4));

//const addTwo = (num1, num2) => num1 + num2; -> implict return

// const addTwo = (num1, num2) => ( num1 + num2 )  -> paranthese use to no return

const addTwo = (num1, num2) => ({ username: "hitesh" });

// console.log(addTwo(3, 4));

// console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
