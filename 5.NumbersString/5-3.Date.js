// var dateObjectName = new Date([paraments]);

var Xmas25 = new Date("December 25, 2025");
console.log(Xmas25);


var today = new Date(); // 현재시간
var endYear = new Date(2015, 2, 6, 23, 59, 59, 999); // Set day and month;
endYear.setFullYear(today.getFullYear()); // Set Year to this year;
console.log(today, endYear);
var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
var daysLeft = (endYear.getTime() - today.getTime) / msPerDay;
var daysLeft = Math.round(daysLeft); // returns days left in the year
console.log(msPerDay);


// 예제
function Clock() {
    var time = new Date(); // 현재 날짜와 시간을 time 변수에 담음
    var hour = time.getHours(); // 현재 시간의 시(0~23)를 반환
    var minute = time.getMinutes(); // 현재 시간의 분(0~23)를 반환
    var second = time.getSeconds(); // 현재 시간의 초(0~59)를 반환환

    var temp = "" + (hour > 12 ? hour - 12 : hour);  // 24시간 형식을 12시간 형식으로 변환
    if (hour == 0) temp = "12"; // 0시(자정)인 경우 "12"로 변경
    temp += (minute < 10 ? ":0" : ":") + minute; // 분과 초 10보다 작은 겨웅 앞에 "0"추가해 두자리로 만듬
    temp += (second < 10 ? ":0" : ":") + second;
    temp += hour >= 12 ? "P.M" : "A.M"; // hour이 12보다 높거나 낮을 경우 "P.M" 아닐 경우 "A.M"
    return temp; // 결과 반환
}
console.log(Clock());
