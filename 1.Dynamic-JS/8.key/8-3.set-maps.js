var burger = new Set();
burger.add(1);
burger.add("Cheeze Burger");
burger.add("Whopper Burger");

burger.has(1) // true;
burger.delete("Whopper Burger");
burger.size; // 2

for (let item of burger) console.log(item);
// 1
// Cheeze Burger

var burger2 = new Set();
Array.from(burger);
[...burger2];

burger2 = new Set([1,2,3,4]);
console.log(burger2);
// Set(4) { 1, 2, 3, 4 }
