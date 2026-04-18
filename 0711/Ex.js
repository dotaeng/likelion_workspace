var num = 1;
var bol = true;
var str = 'hello';
var obj = {};
var ary1 = [1, 2, 3];
var ary2 = [1, 2, 3];
console.log(num);
//vscode: nodemon (파일명).js
//타입추론
var num2 = 1;
var bol2 = true;
var srt2 = 'hello';
console.log(num2); //1
var a = 0;
console.log(a); //0
a = 'hello';
console.log(a); //hello
a = true;
console.log(a); //true
//템플릿 문자열
var count = 10, message = "Your count";
var result = "".concat(message, " is ").concat(count);
console.log(result); //Your count is 10
var age = 22, myName = 'doyeon';
var introduce = "".concat(myName, " is ").concat(age, " years old");
console.log(introduce); //doyeon is 22 years old
var good = {
    name: 'doyeon',
    age: 22,
    etc: true
};
console.log(good);
var user = {
    name: 'doyeon',
    age: 22,
    birthday: '020915'
};
user.birthday = '020915';
console.log(user);
var Doyeon = {
    name: 'doyeon',
    age: 22,
    1: 'A',
    2: 'B'
};
//클래스
var IPerson = /** @class */ (function () {
    function IPerson() {
    }
    return IPerson;
}());
var doyeon1 = new IPerson();
doyeon1.name = 'Doyeon';
doyeon1.age = 22;
console.log(Doyeon);
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person2;
}());
var doyeon2 = new Person2('doyeon', 22);
console.log(doyeon2);
var Person3 = /** @class */ (function () {
    function Person3(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person3;
}());
var doyeon3 = new Person3('doyeon', 22);
console.log(doyeon3);
var ps4 = /** @class */ (function () {
    function ps4(name, age) {
        this.name = name;
        this.age = age;
    }
    return ps4;
}());
var doyeon4 = new ps4('doyeon', 22);
console.log(doyeon4);
