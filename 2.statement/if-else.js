function roll() {
//  return Math.ceil(Math.random() * 6);
}

function game() {
    // const result = roll();
    var result = 100;
    while(result <= 101) {
    result--;
    console.log(`체력:${result}`);
    if (result == 50) {
        console.log("체력 50% 게임종료!");
        break;
    } else if (result >= 50) {
        console.log("게임이 진행중입니다.");
    } else {
        console.log(`체력은 현재 ${result}입니다`);
        
    } 
    }
  
}

game();