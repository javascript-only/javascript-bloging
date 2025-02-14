// 1.concat

// let myArray = ["1", "2", "3"];
// myArray = myArray.concat("a", "b", "c");
// console.log(myArray); // [ '1', '2', '3', 'a', 'b', 'c' ]


// 2.join()

// const fifaWorldCup = ["1994", "1998", "2002"];
// const list = fifaWorldCup.join(" - "); 
// console.log(list); // 1994 - 1998 - 2002


// 3.push()
// const myArray = ["1", "2"];
// myArray.push("3"); // myArray is now ["1", "2", "3"]
// console.log(myArray);


// 4.pop()
// const list = myArray.pop(); // ["1","2"], last = "3"
// 5.shift()
// const list = myArray.shift(); // ["2", "3"], last = "1"

// 6.unshift()
// myArray.unshift("4", "5"); // ["4", "5", "1", "2", "3"]

// const myArray = ["1", "2", "3"];

// 7.slice()
// let myArray = ["a", "b", "c", "d", "e", "f"];
// myArray = myArray.slice(1,5); // ["b", "c", "d", "e"]

// 8.at()
// const myArray = ["a", "b", "c", "d", "e", "f"];

// console.log(myArray.at(-2)); // "e", the second-last element of myArray


// 9. splice 
// const myArray = ["1", "2", "3", "4", "5", "6"];

// myArray.splice(1,3, "g", "h", "c", "d" )
// console.log(myArray);

// myArray는 ["1", "g", "h", "c", "d", "5","6"]이됨
// 첫 번째 인덱스 ("3이" 값이 있는 곳)에서 시작 
// 3개의 요소 삭제 후 그 자리에 연속된 모든 요소 삽입

// 10.reverse
// const myArray = ["1", "2", "3"];
// myArray.reverse();
// console.log(myArray)
// // ["3", "2", "1"]

// 11.flat()
// let myArray = [1,2, [3,4]];
// console.log(myArray = myArray.flat()) // [1,2,3,4], sine the [3,4] subarray is flattened


// 12.sort()
// const myArray = ["april", "march", "june"];
// console.log(myArray.sort()); // ["april", "june", "march"]


// 13.sort()2
// const sortFn = (a,b) => {
//     if (a[a.length -1] < b[b.length - 1]) {
//         return -1; // 음수 => a < b, a는 b에 앞에옴
//     } else if (a[a.length - 1] > b[b.length - 1]) {
//         return 1; // 양수 => a > b, a 는 b에 뒤에옴
//     }

//     return 0; // 0 => a = b, a와 b는 원래 순서를 유지
// };

// console.log(myArray.sort(sortFn));

// 14. indexOf()

// const a = ["a", "b", "a", "d", "a", "b"];
// console.log(a.indexOf("b")) // 1

// console.log(a.indexOf("b", 2)); //3
// console.log(a.indexOf("z")); // -1, z not search


// // 15. lastIndexOf(); 
// console.log(a.lastIndexOf("b")); // 5


// // 마지막 일치한 요소부터 다시 시작
// console.log(a.lastIndexOf("b", 4)); // 1
// console.log(a.lastIndexOf("z"));


// 16. forEach();
// const a = ["a", "b", "c"];
// a.forEach((element) => {
//     console.log(element);
    
// });
// Logs: 
// a 
// b 
// c 

// 17. map
// const ake = ["japan", "usa", "mexico"];
// const ake2 = ake.map((item) => item.toUpperCase());
// console.log(ake2); // [ 'JAPAN', 'USA', 'MEXICO' ]


// 18.flatMap
// const ake = ["japan", "usa", "mexico"];
// const ake2 = ake.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
// console.log(ake2); // [ 'JAPAN', 'japan', 'USA', 'usa', 'MEXICO', 'mexico' ]


// 19.filter()
// const ake = ["japan", 10,  "usa", 20, "mexico", 30];
// const ake2 = ake.filter((item) => typeof item === "number");
// console.log(ake2); // [10, 20, 30]

// 20.find()
// const ake = ["japan", 10,  "usa", 20, "mexico", 30];
// const ake2 = ake.find((item) => typeof item === "number");
// console.log(ake2);


// 21.findLast
// const ake = ["japan", 10,  "usa", 20, "mexico", 30];
// const ake2 = ake.findLast((item) => typeof item === "number");
// console.log(ake2); // 30

// 22.findIndex
// const ake = ["japan", 10,  "usa", 20, "mexico", 30];
// const ake2 = ake.findIndex((item) => typeof item === "number");
// console.log(ake2); // 1

// 23.findLastIndex
// const ake = ["japan", 10,  "usa", 20, "mexico", 30];
// const ake2 = ake.findLastIndex((item) => typeof item === "number");
// console.log(ake2); // 5

// 24.every()

// function isNumber(value) {
//     return typeof value === "number";
// }

// const ake = [1,2,3];
// console.log(ake.every(isNumber)); // true

// const ake2 = [1, "2", 3];
// console.log(ake2.every(isNumber)); // false


// 25. some()

// function isNumber(value) {
//     return typeof value === "number";
// }

// function isString(value) {
//     return typeof value === "string";
// }

// const ake = [1,2,3];
// console.log(ake.some(isNumber)); // true

// const ake2 = ["hi", "hello", "my"];
// console.log(ake2.some(isString)); // true 


// const ake3 = [1,2,3]; 
// console.log(ake3.some(isString)); // false

 
// 26. reduceRight() 
// const a = [10,20,30];
// const total = a.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, 
//     0,
// );

// console.log(total);

// 27. delete

// 배열 생성자
// const a = Array(5); // [ <5 empty items> ]
// console.log(a);



// 배열 리터럴의 연속된 쉼표
// const b = [1,2,,, 5]; // [1,2, <2 empty items>, 5]
// console.log(b);


// array.length 보다 큰 인덱스의 슬롯에 직접적 값 설정
// const c = [1,2];
// c[4] = 5; // [1 ,2 ,<2 empty items>, 5]
// console.log(c);

// .length를 직접 설정해 배열 늘리기
// const d = [1,2];
// d.length = 5; // [ 1,2, <3 empty items>]
// console.log(d);

// 요소 삭제
// const e = [1,2,3,4,5];
// delete e[3]; // [1,2,3,<1 empty items>, 5]
// console.log(e)

// undefined 채우기
// const arr = [1,2, , , 5]; // 희소 배열 생성

// // 인덱스 접근
// console.log(arr[3]); // undefined

// // for...of
// for(const i of arr) {
//     console.log(i);
    
// }

// // Logs: 1 2 undefined undefined 5

// // 전개 연산
// const another = [...arr]; 
// console.log(another); // [ 1, 2, undefined, undefined, 5]

/** 
const arr = [1,2, , , 5]; // 희소 배열 생성
 
const mapped = arr.map((i) => i + 1); // [2,3, <2 empty items>, 6]
arr.forEach((i) => console.log(i)); // 1 2 5
const filtered = arr.filter(() => true); // [1,2,5]
const hasFalsy = arr.some((k) => !k); // false

// 속성 열거
const keys = Object.keys(arr) ; // ['0', '1', '4']

for (const key in arr) {
    console.log(key);    
}


// Logs: '0', '1', '4'
// 결과 값이 객체일 경우 배열의 반복자가 아닌 속성 열거 사용
const objectSpread = { ...arr }; // { '0': 1, '1' : 2, '4' : 5 }

**/


// 28. 다차원 배열 

// const a = new Array(4);
// for (let i = 0; i < 4; i++) {
//     a[i] = new Array(4);

//     for(let j = 0; j < 4; j++){
//        console.log(a[i][j] = `[${i}, ${j}]`);
//     }
// }

// const shin = new Array(25);

// for (let k = 0; k < 25; k++) {
//        shin[k] = new Array(25);

//        for (let j = 0; j < 25; j++) {
//         console.log(shin[k][j] = `짱구는 못말려 ${j}기`);
//        }
//        return;
// }

// 29. 다른 속성을 담기 위한 배열
// const arr = [1,2,3];
// arr.property = "value";
// console.log(arr.property) // value

function printArguments() {
    Array.prototype.forEach.call(arguments, (item) => {
        console.log(item);
        
    })
}

function printString() {
    Array.prototype.forEach.call("a string man", (chr) => {
        console.log(chr);
        
    })
}


printArguments(1,2,3, "123")
 
printString();
