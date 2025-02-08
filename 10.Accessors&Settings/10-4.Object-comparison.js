// 두 개의 변수, 두 개는 같은 속성이나 서로 다른 객체다.
const dog = { name: "말티즈" };
const dogMall = { name: "말티즈" };

console.log(dog == dogMall); // false 반환


// 두 개의 변수, 하나의 객체 
const soccer = { name: "축구" };
const football = soccer; // soccer 객체 참조를 football 에 할당


// football 과 soccer 가 같은 객체를 가리킨다
football == soccer; // true 
football == soccer;

soccer.name = "농구";
console.log(soccer); // 출력: { name: "축구" } not { name: "농구" }