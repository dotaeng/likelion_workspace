//더하기, 뺴기, 초기화 버튼을 누르면 해당 기능을 수행하는 프로그램

let x = 0;

document.getElementById("plusBtn").onclick = function(){
    x = ++x; 

    document.getElementById("countLabel").innerHTML = x;
}

document.getElementById("minusBtn").onclick = function(){
    x = --x;
    document.getElementById("countLabel").innerHTML = x;

}

document.getElementById("resetBtn").onclick = function(){
    x = 0;
    document.getElementById("countLabel").innerHTML = x;
}