function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    return a * b;
}

console.log(multiply(5)); //5

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5)); //5