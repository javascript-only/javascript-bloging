Promise.resolve().then(() => console.log(2));
console.log(1);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait().then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4

function doSomethingCritical() {
  return new Promise((resolve, reject) => {
    resolve("결과");
  });
}

doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {})
  )
  .then(() => moreCriticalStuff())
  .catch((e) => console.log("Critical failure: " + e.massage));
