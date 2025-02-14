console.log(square); // Error : 초기화 되기전 접근 X


// 모든 함수 선언이 최상단으로 끌어올려짐
function square(n) {
    return n * n;
}


console.log(square(7)); // 49