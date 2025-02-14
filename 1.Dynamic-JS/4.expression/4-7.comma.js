var x = [0,1,2,3,4,5,6,7,8,9];
var a = [x,x,x,x,x];

// i가 0이고, j는 9 j가 i보다 크거나 같다면 i는 증가하고 j는 감소
for (var i = 0, j = 9; i <= j; i++, j--) {
      console.log("a["+ i + "][" + j + "]= " + a[i][j]);     
}