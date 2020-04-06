var s1 = "hello1";
// 에러 : is not a function
//s1.myFunction();

String.prototype.myFunction = function() {
    console.log("mystring" + this);
}

var s2 = "hello1";
s2.myFunction();