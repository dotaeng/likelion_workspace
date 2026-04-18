/* 아래의 array 내용을 모두 출력하는 for문을 작성하시오.
(단, length 를 사용하여야 한다.)
let array = [1,2,3,4,5]; */

/* let array = [1, 2, 3, 4, 5];
let arrayLength = array.length;

for (let i = 0; i<arrayLength; i++){
    console.log(array[i]);
} */
 

/* 1부터 100까지의 숫자 중 7의 배수들만을 합하여 그 결과를 출력하는 프로그램을 짜고자 할대, 아래의 빈칸을 채우시오. */

 let sum = 0;
for(let i = 0; i<= 100; i++){
    if(i%7 == 0){
        sum += i;
    }
}
console.log(sum);