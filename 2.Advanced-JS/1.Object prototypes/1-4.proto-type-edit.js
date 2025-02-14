function IceCream(kind) {
  this.kind = kind;
}

IceCream.prototype.eat = function () {
  console.log(
    "제가 좋아하는 베스킨라빈스 아이스크림은" + " " + this.kind + "입니다"
  );
};

IceCream.prototype.cake = function () {
  console.log(
    "제가 좋아하는 베스킨라빈스 아이스크림 케이크는" +
      " " +
      this.kind +
      "입니다"
  );
};

// const st = new IceCream("슈팅스타");
const st = new IceCream("포차코의 러블리 윈터");

// st.eat(); // "제가 좋아하는 베스킨라빈스 아이스크림은 슈팅스타 입니다"
st.cake(); // "제가 좋아하는 베스킨라빈스 아이스크림 케이크는 포차코의 러블리 윈터입니다"
