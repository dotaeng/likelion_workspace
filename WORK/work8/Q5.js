//이메일을 입력받고 '@' 전까지만 출력하시오.

let email = prompt("이메일을 입력하시오.");

let user = email.indexOf("@");
let useremail = email.substring(0, user);

console.log(useremail);

