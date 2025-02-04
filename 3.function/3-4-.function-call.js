console.log(square); // undefined
console.log(square(5)); // TypeError : square is not function
square = function(n) {
    return n * n;
};

 