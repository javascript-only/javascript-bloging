function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let s = 0;
  for (let i = start; i < end; step) {
    console.log("sss");
    s++;
    yield i;
  }

  return s;
}
