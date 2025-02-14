// 변수 x를 선언 f() 결과로 초기화
//  x = f() 할당 표현식의 결과는 버려짐
// let x = f();

// 변수 x를 선언해 g()의 결과로 초기화
// x = g() 할당 표현식의 결과는 버려짐
// x = g(); // 변수 x를 g()의 결과로 재할당


// let x;
// const y = (x = f()); // 또는 const  y = x = f();
// console.log(y); // x = f() 할당의 반환 값

// console.log((x = f())); // 반환 값 직접기록

// 할당 표현식은 보통 표현식을 기대하는 곳이라면 이디에나 중첨 사용 가능
// 배열 리터럴의 요소나 함수의 매개변수도 그런 곳 중 일부임.
// console.log([0, (x = f()), 0]);
// console.log(f(0, (x = f()), 0));



function a() {
    console.log("A!");
    return 2;
    
}

function f() {
    console.log("F!");
    return 3;
}

let x, y;

y = x = f();
y = [f(), (x = g())];
x[f()] = g();


let v = (y = x = f());