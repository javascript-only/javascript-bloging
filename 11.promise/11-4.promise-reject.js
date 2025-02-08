// window.addEventListener(
//   "unhandledrejection",
//   (event) => {
//     event.preventDefault();
//   },
//   false
// );

// setTimeout((() => saySomething("10 seconds passed"), 10000));

function saySomething(message) {
  console.log(message);
}

function failureCallback(error) {
  console.error("Error:", error);
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
