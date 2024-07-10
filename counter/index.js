

const countlebel = document.getElementById("countShow") ;
const decrease  = document.getElementById("decrease") ;
const increse = document.getElementById("increse") ;
const reset = document.getElementById("reset") ;

let count = 0 ;

decrease.onclick = function () {
    count --;
    countlebel.textContent = count ;
}
increse.onclick = function () {
    count ++;
    countlebel.textContent = count ;
}
reset.onclick = function () {
    count = 0;
    countlebel.textContent = count ;
}