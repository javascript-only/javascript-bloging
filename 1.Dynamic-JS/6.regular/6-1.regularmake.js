const re = /ab +c/;

const re1 =new RegExp("ab+c");

// 이스 케이핑
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}() | [\]\\]/g, "\\$&"); // $&은 일치한 문자열 전체
}