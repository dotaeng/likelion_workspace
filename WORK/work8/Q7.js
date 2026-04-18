/* 사용자가 컴퓨터가 생각하고 있는 숫자를 맞추는 프로그램을 짜시오. */

let cpt = 10;


while (true) {
    let user = parseInt(prompt("숫자를 입력하시오."));
        if(user < cpt){
            console.log("up");
            continue;
    } else if (user > cpt){
            console.log("down");
            continue;
    } else {
        console.log("정답입니다. 프로그램을 종료합니다.");
        break;
    }
}