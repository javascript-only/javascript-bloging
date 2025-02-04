// function square(number) {
//     return number * number;
// }

function myFunc(theObject) {
    theObject.make = "Toyota";
}

const myCar = {
    make: "Hyundai",
    model: "Accord",
    year: "1999",
};

const x = myCar.make;

myFunc(myCar); // ToyoTa로 변경
console.log(myCar.make);


const y = myCar.make;