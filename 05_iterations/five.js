//for each
// calls a function for each element in an array  -- prototype bhi h eske
//not apply on empty

const coding = ["js", "ruby", "java", "python", "cpp", 77];

coding.forEach(function (val) {
  //   console.log(val);
});

coding.forEach((item) => {
  //   console.log(item);
});

function printMe(item) {
  //   console.log(item);
}

//coding.forEach(printMe); //doubt solve bcz pass a function refrence

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
