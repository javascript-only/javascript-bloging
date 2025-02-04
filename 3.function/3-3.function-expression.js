const square = function(number) {
    return number * number;
};

const x = square(4); // 'x' 의 값은 16

console.log(x);

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));


function map(fn, arr) {
    const result = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i]);
    }
    return result;
}

const fn = function(x) {
    return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
const cube = map(fn, numbers);
console.log(cube);


let myFunc;

if (num === 0) {
    myFun = function (theObject) {
        theObject.name = "Toyota"
    }
}