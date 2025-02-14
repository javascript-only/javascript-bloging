new Promise((resolve, reject) => {
  console.log("Initial");
  resolve();
})
  .then(() => {
    throw new Error("Something failed");
    console.log("Do this");
  })
  .catch(() => {
    console.log("Do that");
  })
  .then(() => {
    console.log("Do this, whatever happened before");
  });

/*
Initial
Do that
Do this, whatever happened before
*/

// doSomething()
//   .then((result) => doSomethingElse(result))
//   .then((newResult) => doThirdThing(result))
//   .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
//   .catch(failureCallback);

// try {
//   const result = syncDoSomething();
//   const newResult = syncDoSomethingElse(result);
//   const finalResult = syncDoThirdThing(newResult);
// } catch (error) {
//   failureCallback(error);
// }

async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch (error) {
    failureCallback(error);
  }
}
