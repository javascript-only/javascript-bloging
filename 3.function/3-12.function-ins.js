function myCrost(separator) {
    let result = "";

    for(let i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }

    return result;
}


const output = myCrost("-", "apple", "banana", "cherry");
console.log(output);
