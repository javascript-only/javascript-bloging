// const Samsung = new Object();
// Samsung.make = "Lee Byung-chul";
// Samsung.model = "MNC";
// Samsung.year = 1938;


// const Samsung = {
//     make: "Lee Byung-chul",
//     model: "MNC",
//     year: 1938
// }
// console.log(Samsung);

// Samsung["make"] = "Lee Byung-chul";
// Samsung["model"] = "MNc";
// Samsung["year"] = 1938;


// const Tobj = new Object(),
//      str = "myString",
//      rand = Math.random(),
//      obj = new Object();

     
// Tobj.type = "마침표 구문";
// Tobj["date created"] = "공백을 포함한 문자열";
// Tobj[str] = "문자열 값";
// Tobj[rand] = "무작위 수";
// Tobj[obj] = "객체";
// Tobj[""] = "빈 문자열"

// console.log(Tobj);


const MyCar = new Object();
let propertyName = "make";

MyCar[propertyName] = "Lamborghini";

propertyName = "model";
MyCar[propertyName] = "GT3";

propertyName = "year"
MyCar[propertyName] = 1969;

function showProps(obj, objName) {
    let result = "";
    for (let i in obj) {
        // obj.hasOwnProperty를 사용해 객체의 프로토타입 체인에 존재하지 않는 속성 제외
        if (obj.hasOwnProperty(i)) {
            result += `${objName}.${i} = ${obj[i]}\n}`;
        }
    }
    console.log(result);
    
}

showProps(MyCar, 'myCar')

