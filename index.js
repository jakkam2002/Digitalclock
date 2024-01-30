const H1 = document.getElementById("hours");
const M1 = document.getElementById("minutes");
const S1 = document.getElementById("seconds");
const A1 = document.getElementById("ampm");
function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h>12){
        h = h - 12
        ampm = "PM"
    }
  
    h = h > 10 ? '0' + h : h;
    // m = m > 10 ? '0' + m : m;
    // s = s > 10 ? '0' + s : s;


    H1.innerText = h;
    M1.innerText = m;
    S1.innerText = s;
    A1.innerText = ampm;
    setTimeout(()=>{
       updateClock()
    },1000)
}
updateClock()