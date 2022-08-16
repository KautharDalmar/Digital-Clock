const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("Second");
const AMPMEL = document.getElementById("AMPM");

function Udateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let AMPM = "PM";

    if(h > 12) {
        h = h - 12;
        AMPM = "AM";
    }
   h = h<10? "0" +h : h;
   m = m<10? "0" +m : m;
   s = s<10? "0" +s : s;

   hourEl.innerText = h;
   minutesEl.innerText = m;
   secondEl.innerText = s;
   AMPM,(innerText = AMPM)
   setTimeout(()=>{
    Udateclock()
   }, 1000);
   
}
Udateclock()
