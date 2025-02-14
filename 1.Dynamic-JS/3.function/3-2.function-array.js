function myFunc(theArr) {
    theArr[0] = 20;
}

const arr = [45];

console.log(arr[0]); //45
myFunc(arr);
console.log(arr[0]); // 20

