let name = prompt("Adinizi giriniz");
let myname = document.getElementById("myName");
myname.innerHTML = name;

function showTime(){
    let myClock = document.getElementById("myClock")
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    myClock.innerHTML = time;
}
showTime()