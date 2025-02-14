const colors = ["red", "blue", "yellow"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    
}

// const divs = document.getElementsByTagName("div");
// for (let i = 0, div; (div = divs[i]); i++) {
//     /*div in some way */
// }

const characters = ["Zelda", "Mario", "Sonic"];
characters.forEach((character) => console.log(character));
// Zelda 
// Mario
// Sonic

const Soccer = ["Messi", "Son", "Beckham"];

Soccer.forEach((element) => {
    console.log(element);
    
})

// Logs : Messi Son Beckham

if(Soccer[2] === undefined) {
    console.log("존재하지 않습니다."); // true
}

const nonesparseArray = ["first", "second", undefined, "fourth"];

nonesparseArray.forEach((element) => {
    console.log(element);
    
})

// Logs: 
// first
// second
// undefined
// fourth