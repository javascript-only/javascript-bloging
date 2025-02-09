var buffer = new ArrayBuffer(16); // 16 byte
var int32View = new Int32Array(buffer);

// if (buffer.byteLength === 16) {
//   console.log("Buffer is 16 Bytes"); // 16Byte true
// } else {
//   console.log("noop, buffer Wrong!"); // 16Byte false
// }

// for (var i = 0; i < int32View.length; i++) {
//   console.log((int32View[i] = i * 2)); // 0 2 4 6
// }

var int16View = new Int16Array(buffer); // 0 0 2 0 4 0 6 0

for (var i = 0; i < int16View.length; i++) {
  console.log("Entry" + i + ":" + int16View[i]);
}

int16View[0] = 32;
console.log("Entry 0 is the 32-bit array is now" + int32View[0]);
