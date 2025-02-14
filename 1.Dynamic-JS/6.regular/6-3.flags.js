// const re = /pattern/flags;

// const re = new RegExp("pattern", "flags");

// const re = /\w+\s/g;
// const re = new RegExp("\\w+\\s", "g");

// const str = "hi my name";
// const myArray = str.match(re);
// console.log(myArray);

// ["hi ", "my"]

// exec

const str = "fee fi fo fum";
const re = /\w+\s/g;

console.log(re.exec(str));
console.log(re.exec(str));
console.log(re.exec(str));
console.log(re.exec(str));

console.log(str.match(re));



