var mints = 0;
var secs = 0;
var msecs = 0;

var mintsname = document.getElementById("mints");
var secsname = document.getElementById("secs");
var msecsname = document.getElementById("msecs");
var interval;

function millisec(){
    msecs++
    msecsname.innerHTML = msecs;
    if (msecs >= 100){
        secs++
        secsname.innerHTML =  '0' + secs
        msecs = 0;
    }
    else if(secs >= 60){
        mints++
        secs = 0
        mintsname.innerHTML = "0" + mints
     }
}
function start(){
interval = setInterval(millisec,10)

}

function stop(){
    clearInterval(interval)
}
function reset(){
    mints = 0;
    secs = 0;
    msecs = 0;
    mintsname.innerHTML = mints;
    secsname.innerHTML = secs;
    msecsname.innerHTML = msecs;
}

