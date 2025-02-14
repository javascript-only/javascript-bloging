let obj = {};

obj.x = 5;
console.log(obj.x); // 5 출력
console.log(obj); // { x : 5 } 출력


const key = "y";
obj[key] = 10;
console.log(obj[key]); // 5 출력
console.log(obj); // { x:5, y: 10}

let val = 0;

console.log((val.x = 3)); // 3 출력
console.log(val.x); // undefined 출력
console.log(val); // 0 출력.





