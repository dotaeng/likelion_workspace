function score(score1, score2){
    let grade = score1 + score2;
    if (grade >= 90){
        console.log("A");
    } else if (grade >= 80){
        console.log("B");
    } else if (grade >= 70){
        console.log("C");
    } else if (grade >= 60){
        console.log("D");
    } else {
        console.log("F");
    }
}

score(50,20);