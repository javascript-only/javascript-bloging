function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
}

var arr = multiply(2,1,2,3);
console.log(arr); // [2,4,6]


var a = ["Hydrogen", "Helium", "Lithium", "Berllium"];

var a2 = a.map(function (s) {
    return s.length;
});

console.log(a2);


var a3 = a.map((s) => s.length);
console.log(a3);


// this

// function Person() {

//     // this 사전적 정의
//     this.age = 0;

//     setInterval(function growUp() {
//         this.age++;
//     }, 1000);
// }

// var p = new Person();

 
function Person() {
    var self = this // `self ` 대신 `that`를 선택하는 사람도 있음
    self.age = 0;

    setInterval(function growUp() {
        self.age++;
    },1000);

    var p = new Person();
}