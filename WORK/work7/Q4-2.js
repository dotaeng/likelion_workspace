function game(num){
    if (num % 5 == 0){
        console.log("5의 배수입니다.");
    } else {
        console.log("5의 배수가 아닙니다.");
    } 
}

game(10);
game(11);