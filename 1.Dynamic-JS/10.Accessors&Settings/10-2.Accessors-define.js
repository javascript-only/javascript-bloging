const o = { a: 0 };

Object.defineProperties(o, {
  b: {
    get: function () {
      return this.a + 1;
    },
  },
  c: {
    set: function (x) {
      this.a = x / 2;
    },
  },
});

o.c = 10; // 설정자 실행, a 속성 10 / 2 = 5 할당
console.log(o.b); // 접근자 실행
