let clock=document.getElementById("clock");
let dateEl=document.getElementById("date");

setInterval(()=>{
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    let period="AM";
    if(h>=12){
        period="PM";
    }
    if(h>12) h=h-12;
    if(h==0) h=12;

    if(h<10) h="0"+h;
    if(m<10) m="0"+m;
    if(s<10) s="0"+s;


    let time= h + ":" + m + ":" + s + " " + period;
    clock.innerText=time;

    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["Jan","Feb","Mar","Apr","May","jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    let day=days[date.getDay()];
    let d=date.getDate();
    let month=months[date.getMonth()];
    let year=date.getFullYear();

    dateEl.innerText=`${day}, ${d} ${month} ${year}`;

},1000);

