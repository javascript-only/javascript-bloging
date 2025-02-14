var classic = new Map();
let n = ["Germany", "Austria", "England", "Poland"];
classic.set("Beethoven", n[0]);
classic.set("Mozart", n[1]);
classic.set("Haydn", n[1]);
classic.set("Elgar", n[2]);
classic.set("Chopin", n[3]);
classic.set("Liszt", n[1]);

classic.size; // 3
classic.get("Paganini"); // undefined
classic.get("Bach") // false


for (var [key,value] of classic) {
    console.log(key + " goes " + value);
    
}