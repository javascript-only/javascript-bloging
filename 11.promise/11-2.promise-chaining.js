// const promise3 = promise.then(successCallback, failureCallback);

// or

// const promise2 = doSomething.then(successCallback, failureCallback);

// doSomething(function (result) {
//   doSomethingElse(
//     result,
//     function (newResult) {
//       doThirdThing(
//         newResult,
//         function (finalResult) {
//           console.log("Got the final result: " + finalResult);
//         },
//         failureCallback
//       );
//     },
//     failureCallback
//   );
// }, failureCallback);

// doSomething()
//   .then(function (result) {
//     return doSomethingElse(result);
//   })
//   .then(function (newResult) {
//     return doThirdThing(newResult);
//   })
//   .then(function (finalResult) {
//     console.log("Got the final result: " + finalResult);
//   })
//   .catch(failureCallback);

function doSomething(callback) {
  setTimeout(() => callback("firstResult"), 1000);
}

function doSomethingElse(input, callback, failureCallback) {
  if (!input) {
    return failureCallback("Error in doSomethingElse");
  }
  setTimeout(() => callback(input + " -> secondResult"), 1000);
}

function doThirdThing(input, callback, failureCallback) {
  if (!input) {
    return failureCallback("Error in doThirdThing");
  }
  setTimeout(() => callback(input + " -> finalResult"), 1000);
}

function failureCallback(error) {
  console.error("Error:", error);
}

// doSomething(function (result) {
//   doSomethingElse(
//     result,
//     function (newResult) {
//       doThirdThing(
//         newResult,
//         function (finalResult) {
//           console.log("Got the final result: " + finalResult);
//         },
//         failureCallback
//       );
//     },
//     failureCallback
//   );
// }, failureCallback);

// doSomething()
//   .then((result) => doSomethingElse(result))
//   .then((newResult) => doThirdThing(newResult))
//   .then((finalResult) => {
//     console.log(`Got the final result: ${finalResult}`);
//   })
//   .catch(failureCallback);
