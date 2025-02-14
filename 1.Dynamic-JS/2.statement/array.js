const arr = [1,2,3,4,5,6,7];


// for 문
// for (let i = 0; i < arr.length; i++) {
//     console.log(`배열의 ${i + 1} 번째 요소는 ${arr[i]} 입니다.`);
    
// }

arr.forEach((item, index) => {
    console.log(`배열의 ${index + 1} 번째 요소는 ${item}입니다.`);
    
})

for (let item of arr) {
    console.log(`현재 요소는 ${item} 입니다.`);
    
}