let cookie = document.getElementById("cookie");
let coint = document.getElementById("clicker__counter");
let cointNum = document.getElementById("clicker__counter").textContent;
let cointSec = 0;
let clicker_s = document.getElementById("clicker_s");
let timeEnd=0;

function clickCookie(){
    let time=timeEnd;
    if(cointNum%2==0){
    cookie.width=180;
    cookie.height=120;}
    else{
        cookie.width=200;
        cookie.height=128;}
    cointNum++;
    coint.textContent=cointNum;
    timeEnd = performance.now();
    cointSec = (timeEnd-time)/1000;
    clicker_s.textContent=(1/cointSec).toFixed(2);
}
cookie.addEventListener("click", clickCookie);
