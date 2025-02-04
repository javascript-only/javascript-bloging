const pet = function (name) {
    
    // 외부 함수는 'name' 이라 불리는 변수를 정의
    const getName = function() {
        return name; // 내부 함수는 외부 함수의 'name' 변수에 접근합니다.
    };
    return getName; // 내부 함수를 반환, 외부 스코프 노출
};

const myPet = pet("Vest");

console.log(myPet()); // :Vest