/*
 * 배열 (Array)
 */

// 1. 생성자 함수
console.log("====================생성자 함수=====================");
var a1 = new Array();
console.log(typeof (a1));

// 배열을 정의할 때 크기 지정은 별 의미가 없다.
// 
var a2 = new Array(10);
console.log(a2.length);

a2[0] = 0;
a2[10] = 10;
a2[11] = 11;
a2[12] = 12;

console.log(a2[1], a2[2]);   // 배열 요소에 값을 대입하지 않으면 undefined
console.log(a2.length);

// Array VS Object
console.log("====================Array VS Object=====================");
a = [];
a["0"] = 0;
a["1"] = 1;
a["name"] = '머지?';
console.log(a["0"], a[0], a["name"], a.length);
// property의 이름은 string이어야 한다.
for (property in a) {
    console.log("prop: " + property + "-" + typeof (property));
}

o = {};
o["0"] = 0;
o["1"] = 1;
o["name"] = '머지?';
console.log(o["0"], o[0], o["name"], o.length);
for (property in o) {
    console.log("prop: " + property + "-" + typeof (property));
}


// 2. 리터럴
console.log("====================리터럴=====================");
var a2 = [];
console.log(typeof (a2), a2.length);

var a3 = [
    function () {
        console.log("hello")
    },
    20,
    "javascript",
    true,
    {
        email: 'ktsung94@naver.com',
        name: '김태성'
    },
    null,
    undefined];

console.log(a3.length);
for(var i = 0; i < a3.length; i++) {
    console.log(a3[i]);
}