const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdsbz");
const ThisArray = /d(b+)d/g.exec("cdbbdsbz");
const mySt = new RegExp("d(b+)d", "g");
const myAr = mySt.exec("cdbbdbsbz");

console.log(myRe);
console.log(myArray);
console.log(ThisArray);
console.log(myAr);
// console.log(`lastIndex의 값은 ${myRe.lastIndex}`);
console.log(`lastIndex의 값은 ${/d(b+)d/g.lastIndex}`);

