const hobby = {
  speak: function () {
    console.log(this.name + "의 취미는" + " " + this.rugby + "입니다");
  },
};

const Jason = Object.create(hobby);
Jason.name = "제이슨";
Jason.rugby = "럭비";
Jason.speak(); // 제이슨의 취미는 럭비입니다.
