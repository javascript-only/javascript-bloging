// 1. 단항 연산자 delete
delete object.prototype;
delete object[propertyKey];
delete objectName[index];

delete Math.PI; // false 

const myObj = { h: 5 };
delete myObj.h; // true 

// 2. typeof 
typeof operand;
typeof (operand);

var Funs = new Function("3+1");
var shape = "round";
var size = 44;
var foo = ["Apple", "Mongo", "DB"];
var today = new Date();

// 3. void 
void (expressison);
void expressison;


// 4. 관계 연산자 in
propNameOrNumber in ObjectName;

// 배열
var trees = ["rewood", "bay", "cedar", "oak", "maple"];
0 in trees; // true
3 in trees; // true
6 in trees; // false
"bay" in trees; // false no index 
"length" in trees; // true length in array 

// 내장 객체
"PI" in Math; // true 
var myString = new String("coral");
"length" in myString; // true

// 사용자 정의 객체
var mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; //true
"model" in mycar; //true