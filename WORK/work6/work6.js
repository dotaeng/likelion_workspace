let age = 22;

if(age<1){
    console.log("잘못 입력된 나이입니다.");
} else if(age>=1 && age<=100){
    let age2 = Math.floor(age/10);
    switch(age2){
        case 0:
            console.log("무료입장입니다.");
            break;
        case 1:
            console.log("학생 할인입니다.");
            break;
        case 8:
            console.log("노인 할인입니다.");
            break;
        case 9:
            console.log("노인 할인입니다.");
            break;
        case 10:
            console.log("노인 할인입니다.");
            break;
        default:
            console.log("정상 가격입니다.");
            break;
    }
}