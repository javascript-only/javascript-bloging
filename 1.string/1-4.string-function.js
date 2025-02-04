/* function */

foo(); // "bar"

function foo() {
    console.log("bar");
    
}

/* 함수 표현식 */

cuz(); // TypeError 

var cuz = function() {
    console.log("cuz");
    
}