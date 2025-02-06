// 1. 10진수
1234567890;
42;

// 앞에 0이 붙은 숫자 주의
const b = 0888; // 10진수 888로 해석
const g = 0777; // non-strict mode 에서 10진수 511로 해석

console.log(b);
console.log(g);

 
// 2. 2진수
var FLT_sign_bit  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0b00000000011111111111111111111111; // 8388607

console.log(FLT_EXPONENT);
console.log(FLT_sign_bit);
console.log(FLT_MANTISSA);

// 8 진수
var a = 0755; // 493
var m = 0644; // 420

console.log(a);
console.log(m);

var c = 0o11; // ES2015: 8 result: 9
console.log(c);

// 16진수
console.log(0xffffffffffffff); // 72057594037927940
console.log(0x123456789abcdef); // 81985529216486900
console.log(0xa); // 10
