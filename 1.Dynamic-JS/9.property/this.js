const Manager = {
    name: "Jose Mourinho",
    age: 62,
    job: "Football Manager",
    team: "Fenerbahce S.K."
}


const Sing = {
    name: "I.U",
    age: 31,
    job: "singer-songwriter",
    birth: "seoul"
}

function sayHi() {
    console.log(`he is name ${this.name}`);
}

function call() {
    console.log(`she is name ${this.name}`);
}


Manager.sayHi = sayHi;
Sing.call = call;

Manager.sayHi(); // he is name Jose Mourinho
Sing.call(); // she is name I.U

function howOldAMI() {
    console.log(`i am ${this.age}`);
    
}

Sing.howOldAMI = howOldAMI;
Sing.howOldAMI(); // i am 31