for (let i = 1; i < 20; i++) {
    console.log(`현재 숫자는 ${i} 입니다.`);

    if ( i % 2 === 0) {
        continue; // i 가 짝수일때 건너뜀 
    }
    console.log(`${i}는 홀수`);
    
    
}