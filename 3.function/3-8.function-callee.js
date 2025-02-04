// var foo = function bar() {

// }


// var x = 0 
// while (x < 10) {
//     // x < 10
//     x++;
// }

// function loop(x) {
//    if ( x >= 20) {
//     return;

//     loop(x + 1); // 재귀
//    }

//   loop(0);
// }


// function walkTree(node) {
//    if (node == null) {
//     return;
//    }

//    for(var i = 0; i < node.childNodes.length; i++) {
//     walkTree(node.childNodes[i])
//    }
// }

/*
function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  foo(i - 1);
  console.log(`end: ${i}`);
  
}

foo(3);

function addSqaures(a,b) {
  function square(x) {
    return x * x;
  }

  return square(a) + square(b);
}

a = addSqaures(2,3); // 13
b = addSqaures(3, 4); // 25
c = addSqaures(4, 5); // 41

console.log(a,b,c);

*/

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

fn_inside = outside(3);
result = fn_inside(5); // 8
result1 = outside(3)(5); // 8

console.log(fn_inside, result, result1);
