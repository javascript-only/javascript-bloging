// && 연산자
var a1 = true && true; // true 반환
var a2 = true && false; // false 반환
var a3 = false && true; // false반환
var a4 = false && 3 == 4; // false 반환
var a5 = "Red" && "Blue"; // Blue 반환
var a6 = false && "Cat"; // false 반환
var a7 = "Cat" && false; // false 반환

// || 연산자
var b1 = true || false // true 반환
var b2 = false || true; // true
var b3 = true || false; // true 
var b4 = false || 3 == 4; // false 반환
var b5 = "Cat" || "Dog"; // Cat 반환
var b6 = false || "Cat"; // Cat 반환
var b7 = "Cat" || false; // Cat 반환

// ! 연산자
var g1 = !true; // false 반환
var g2 = !false; // true 반환
var g3 = !"Cat"; // false 반환