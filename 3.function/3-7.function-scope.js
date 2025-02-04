// 전역 스코프
const num1 = 20;
const num2 = 3;
const name = "Choke";


// 전역 스코프
function multiply() {
    return num1 * num2;
}

console.log(multiply()); // 60

function getScore() {
    const num1 = 2;
    const num2 = 3;

    function add() {
        return `${name} scored ${num1 + num2}`;
    }

    return add();
}

console.log(getScore()); // 5
