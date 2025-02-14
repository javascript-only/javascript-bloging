// 생성자 함수 정의
function Person(name) {
  this.name = name;
}

Person.prototype.run = function () {
  console.log(this.name + "가 달립니다");
};

const human = new Person("James");
human.run(); // James가 달립니다
