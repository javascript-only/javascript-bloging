var myItrable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (let value of myItrable) {
  console.log(value);
}
// 1 2 3

console.log([...myItrable]); // [1,2,3]

for (let value of ["a", "b", "c"]) {
  console.log(value);
}

// "a" , "b" "c"

// "a" , "b" "c"
console.log([..."abc"]);

function* gen() {
  yield* ["a", "b", "c"];
}

console.log(gen().next()); // { value: "a" done: false}

[a, b, c] = new Set(["a", "b", "c"]);
a; // a
