var a = 1;
var b = 2;
var c = 3;

// 기본 우선순위
console.log(a + b * c); // 7
console.log(a + (b * c)); // 7

// 순위 재정의
// 곱하기보다 더하기를 먼저 수항
console.log((a + b) * c); // 9
console.log(a * c + b * c); // 9

