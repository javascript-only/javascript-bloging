// const obj = {
//     property: value_1, // 속성의 값은 식별 자일 수 있고
//     3: value_3, // 수자일 경우도 있고 
//     // ... ,
//     "property n": value_n, // 문자열 일 수 도 있다 
// }

// let g; 

// if (cond) {
//     x = { gretting: "hi" };
// }

// const myCar = {
//     color: "blue",
//     whiles: 4, 
//     engine: { cylinders: 5, size: 1.5 }
// }

function myCar(make, model, year,owner) {
    this.make = make;
    this.model = model;
    this.year = year; 
    this.owner = owner;
    this.displayCar = displayCar
}
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

// var myCar = new myCar("Audi", "Lamborghini", 1963);
// const perCar = new myCar("Ferrari", "GT3" ,1939);
// const MaseratiCar = new myCar("Maserati", "GT1", 1914);
const rand = new Person("Lchmod", 24, "Man");
const ken = new Person("ken", 24, "Man" )
const nissan = new myCar("Nissan", "300ZX", 1992, ken);
const Eagle = new myCar("Eagle", "Talon Tsi", 1999, rand);

console.log(Eagle.owner.age);

function displayCar() {
    const result = `good ${this.year}, ${this.make}, ${this.model}`;
    prettyPrint(result);
} 

function prettyPrint(obj) {
    console.log(JSON.stringify(obj, null, 4));
    
}

console.log(Eagle.displayCar());


// const ken = new Person("kenny Road", 32, "L");

// console.log(rand.owner.age);
