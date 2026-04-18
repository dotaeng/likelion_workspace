let num:number = 1
let bol:boolean = true
let str:string = 'hello'
let obj:object = {}
let ary1:number[] = [1, 2, 3]
let ary2:Array<number> = [1, 2, 3]

console.log(num)
//vscode: nodemon (파일명).js


//타입추론

let num2 = 1
let bol2 = true
let srt2 = 'hello'
console.log(num2) //1



let a:any = 0
console.log(a) //0

a = 'hello'
console.log(a) //hello

a = true
console.log(a) //true

//템플릿 문자열
let count = 10, message = "Your count"
let result = `${message} is ${count}`
console.log(result) //Your count is 10

let age = 22, myName = 'doyeon'
let introduce = `${myName} is ${age} years old`
console.log(introduce) //doyeon is 22 years old

//인터페이스 선언문

interface Person{
    name:string
    age:number
    etc?:boolean
}

let good:Person = {
    name:'doyeon',
    age:22,
    etc:true
}

console.log(good)


//인터페이스 읽기전용
interface Doyeon{
    name:string
    age:number
    birthday:string
}

let user:Doyeon = {
    name:'doyeon',
    age:22,
    birthday:'020915'
}

user.birthday = '020915'
console.log(user)


//인터페이스 - 인덱스 시그니처

type Score = 'A'|'B'|'C'|'F'

interface Student{
    name:string
    age:number
    [grade:number]:Score
    /* 1:string
    2:string */
}

let Doyeon:Student = {
    name:'doyeon',
    age:22,
    1:'A',
    2:'B'
}



//클래스
class IPerson{
    name:string
    age?:number
}
let doyeon1:IPerson = new IPerson()
doyeon1.name = 'Doyeon'; doyeon1.age = 22
console.log(Doyeon)


class Person2{
    constructor(public name:string, public age?:number){}
}
let doyeon2:Person2 = new Person2('doyeon', 22)
console.log(doyeon2)


class Person3{
    name:string
    age?:number
    constructor(name:string, age?:number){
        this.name = name
        this.age = age
    }
}

let doyeon3:Person3 = new Person3('doyeon', 22)
console.log(doyeon3)

interface Person4{
    name:string
    age:number
}

class ps4 implements Person4{
    constructor(
        public name:string,
        public age:number
    ){}
}
let doyeon4:Person4 = new ps4('doyeon', 22)
console.log(doyeon4)