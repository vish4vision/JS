//for in
//for in loop iterates over a person object. each return a key and value is person[key]
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

//also apply in array
const programming = ["js", "rb", "py", "java", "cpp", 3];

for (const key in programming) {
  //   console.log(programming[key]); //js,rb
  //   console.log(key); // 0,1,2,3,4,5
}

const map = new Map(); //Map not itrealas
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in map) {
  console.log(map[key]); //not working
}
