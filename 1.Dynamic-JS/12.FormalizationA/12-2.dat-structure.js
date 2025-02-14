var buffer = new ArrayBuffer(24);

// 버퍼 내 데이터 읽음

var idView = new Uint32Array(buffer, 0, 1);
var usernameView = new Uint8Array(buffer, 4, 16);
var amountDueView = new Float32Array(buffer, 20, 1);

var typedArray = new Uint8Array([1, 2, 3, 4]);
normalArray = Array.prototype.slice.call(typedArray);
normalArray.length === 4;
normalArray.constructor === Array;

for (let i = 0; i < 4; i++) {
  console.log(normalArray[i]);
}
