// let Animals = ["Tiger", "Cat", "Dog"];

// let Toy = ["Khee", "Coin", "Pass"];

// console.log(Toy[0]); // Khee

// boolean

// let Toy = false;

// if ( Toy == true) {
//     console.log("Toy is True");
    
// }

// 정수 리터럴

// 0, 117, 123456789123456789 (10진수)

// 015, 0001, 0o77777777777n (8진수)

// 0x1123, 0x00111, 0x123456789ABCDEFn (16진수)

// 0b11, 0b0011, 0b11101001010101010101n (2진수)

// 객체 리터럴

// var sales = "Kia";

// function carTypes(name) {
//     if (name === "Honda") {
//         return name;
//     } else {
//         return "Sorry, we don't sell " + name + ".";
//     }
// }

// var car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales};

// console.log(car.myCar); // Saturn
// console.log(car.getCar); // Honda
// console.log(car.special); // Kia

// var car2 = { manyCars: { a: "Sedan", b: "Jeep"}, 7: "Mazda"};

// console.log(car2.manyCars.b); // Jeep
// console.log(car2[7]); // Mazda


// var PropertyNames = {
//     '': 'An empty string',
//     '!': 'Bang!'
// }

// console.log(PropertyNames.''); //Error
// console.log(PropertyNames['']); // empty
// console.log(PropertyNames.!); // Error
// console.log(PropertyNames['!']); // Bang!

// 객체 리터럴

// var obj = {
//     // ___proto__
//     __proto__: theProtoObj,
//     // 'handler: handler'의 단축 표기
//     handler,
//     // Methods
//     toString() {
//         // Super calls
//         return "d " + super.toString();
//     },
//     // Cumputed (dynamic) property names
//     ["prop_" + (() => 42)()]: 42,
// };


// 정규식 리터럴

// var re = /ab+c/;

// 문자열 리터럴

// 'foo';
// "bar";
// '1234';
// 'one lin \n another line';
// "John's cat";

// // 공백을 포함한 문자열 내 심볼 갯수 출력
// console.log("He is cat".length); // 9

// 기본적인 문자열 리터럴 생성
// `In JavaScript '\n' is a line-feed.`;

// 여러줄 문자열
// `In Javascript, template string can run 
// over multiple lines, but double and single
// quoted strings cannot.`;

// 문자열 삽입
// var name = "Bob";
//    time = "today";
//    `Hello ${name}, how are you ${time}`;


// let myTag = (str, name, age) => `${str[0]}${name}${str[1]}${age}${str[2]}`;
// let [name, age] = ["Mosk", 29];
// myTag`Particpant "${name}" is ${age} years old.`;


// 특수 문자 사용
// console.log("one line \n another line");

// 문자 이스케이프

var quote = "He read \"the Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);

var home = "c:\\temp";

// var str = 
//     "this string \ 
//     is broken \ 
//     across multiple \ 
//     lines.";
// console.log(str);

// 줄바꿈 이스케이프프
// var poem = 
//   "Roses are red,\n\
//   Violets are blue,\n\
//   Sugar is sweet,\n\
//   and so is foo.";

//   console.log(poem);

// 템플릿 리터럴
var poem = `Roses are red, 
Violets are blue.
Sugar is sweet,
and so is foo.`;
  
console.log(poem);
