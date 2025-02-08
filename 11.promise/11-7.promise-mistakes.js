function doSomething() {
  return new Promise((resolve, reject) => {
    resolve("결과");
  });
}

function doSomethingElse(result) {
  return new Promise((resolve, reject) => {
    console.log("doSomethingElse:", result);
    resolve(" 새로운 결과");
  });
}

function doThirdThing(newResult) {
  return new Promise((resolve, reject) => {
    console.log("doThirdThing", newResult);
    resolve("세 번째 결과");
  });
}

function doFourthThing() {
  return new Promise((resolve, reject) => {
    console.log("doFourthThing");
    resolve("네 번째 결과");
  });
}

doSomething()
  .then((result) => {
    return doSomethingElse(result);
  })
  .then((newResult) => {
    return doThirdThing(newResult);
  })
  .then(() => {
    return doFourthThing();
  })
  .catch((error) => {
    console.log(error);
  });
