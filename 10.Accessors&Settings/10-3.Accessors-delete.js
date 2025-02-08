// a와 b 두 속성의 새로운 객체 생성
const myObj = new Object();
myObj.a = 10;
myObj.b = 25;



// b속성을 제거해 a속성만 남기기
delete myObj.b;
console.log("b" in myObj); // false
