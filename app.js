const secdiv = document.getElementById('sec');
const mindiv = document.getElementById('min');
const hourdiv = document.getElementById('hour');

setInterval(updateClock, 1000)

function updateClock () {
    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min) / 12;
    secdiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    mindiv.style.transform = "rotate(" + (min * 360) + "deg)";
    hourdiv.style.transform = "rotate(" + (hour * 360) + "deg)";
}
updateClock();