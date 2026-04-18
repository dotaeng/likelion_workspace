const box = document.getElementById('box');

box.style.backgroundColor= 'red';
box.style.color = '#fff';
box.style.width = '100px';
box.style.height = '100px';
box.style.marginLeft = '30px';

box.style.border = '15px solid #000';

setInterval(()=> {
    box.classList.toggle('bg-red');

}, 1000)
const color = function(e){
    const target = e.target;

    if(target.tagName != 'LI') return;

    target.classList.toggle('txt-pink');

};