const promiseOne = new Promise(function (resolve, reject) {
  //do async task
  //db calls, cryptography, netwoork caall
  setTimeout(function () {
    // resolve();
    console.log("Async task is complte");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consiumed");
});

// 2 Example
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asyk task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 consumed");
});

// 3 Example
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "Chai",
      email: "chai@example.com",
    });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

// 4 example
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "abhishek",
        password: "123",
      });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

// commedted code
// const username = promiseFour.then((user) => {
//   console.log(user);
//   return user.username;
// });
// console.log(username);   not like that use gives error for resolev this chaining process

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise is either resolev or rejjceted");
  });

//Five Example

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        username: "abhishek",
        password: "123",
      });
    } else {
      reject("Error : Js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    //like this bcz promise is a object so hanlde like this
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// api example - try cath
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}

getAllUsers();

//api example - .then .catch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("My data:", data);
  })
  .catch((error) => {
    console.log(error);
  });
