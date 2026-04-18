function sum (n) {
    let count = 0;
    for(let i =1; i>=n; i+=1){
        count += i;
    }
    console.log(count);
}

let n= 10;
sum(n);