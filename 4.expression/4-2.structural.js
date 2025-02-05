var foo = ["one", "two", "three"];

// 구조 분해 없음
var one = foo[0];
var two = foo[1];
var three = foo[2];

// 구조 분해 사용
var [one, two, three] = foo;

console.log(foo);

var genre = ["Action", "Adventures", "Thriller"];

var act = genre[0];
var adv = genre[1];
var thr = genre[2];

var [act, adv, thr] = genre;

console.log(genre);

