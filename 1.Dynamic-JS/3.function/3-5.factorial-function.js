function factorial(n) {
    if (n == 0 || n == 1) return 1;
    else return n * factorial(n - 1);
}

const a = factorial(1); // 1
const b = factorial(2); // 2
const c = factorial(3); // 6

console.log(c,b,a);

