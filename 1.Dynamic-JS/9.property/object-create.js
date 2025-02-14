// 동물 속성 메서드 캡슐화
const Animal = {
    type: "양서류", // 속성 기본값
    displayType: function() {
        // 동물 종류 출력 메서드
        console.log(this.type);
    }
}

// animal1 이라는 이름의 동물 타입 객체 생성
const animal1 = Object.create(Animal);
animal1.displayType(); // 출력: 무척추동물


// fish 라는 이름의 동물 타입 객체 생성
const fish = Object.create(Animal);
fish.type = "물고기";
fish.displayType(); // 출력: 물고기


