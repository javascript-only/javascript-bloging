function outside() {
    var x = 10;
    function inside(x) {
        return x * 2;
    }

    return inside;
}

result = outside()(10); // 10대신 20 반환
console.log(result);
