// Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
//   /* use result1, result2, result3 */
// });

// [func1, func2, func3]
//   .reduce((p, f) => p.then(f), Promise.resolve())
//   .then((result3) => {
//     console.log(result3);

//     /* use result3 */
//   });

// const applyAsync = (acc, val) => acc.then(val);
// const composeAsync =
//   (...funcs) =>
//   (x) =>
//     funcs.reduce(applyAsync, Promise.resolve(x));

// const transformData = composeAsync(func1, func2, func3);
// const result3 = transformData(data);

let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
