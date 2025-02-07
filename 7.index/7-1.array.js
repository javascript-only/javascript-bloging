// const arr1 = new Array(element0, element1, /* ..., */ elementN);
// const arr2 = Array(element0, element1, /* ... , */ elementN);
// const arr3 = [element0, element1, /* .. , */ elementN];

const arr = new Array(arrayLength);

const arr2 = Array(arrayLength); // 결과 동일

// 동일
const arr3 = [];
arr.length = arrayLength 


// const obj = {};

// obj.prop [element0, element1, /* ..., */ elementN];

// // OR
// const obj = { prop: [element0, element1, /* ..., */ elementN]};


// 숫자 42라는 하나의 요소를 가진 배열 생성
const arr = [42];

// arr.length 가 42이면서 요소가 없는 배열 생성
const arr = Array(42);

// 동일
const arr = [];
arr.length = 42;


// RangeError 
const arr = Array(9,3); // RangeError: Invalid array length

const wArray = Array.of(10,5); // wArray는 오직 하나의 요소인 10,5를 가지고 있음 

 