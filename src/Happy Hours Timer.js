
let end = new Date("Dec 31, 2022 12:00:00").getTime();
let x = setInterval(function() {
let now = new Date().getTime();
let t = end - now;
let days = Math.floor(t / (1000 * 60 * 60 * 24));
let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.querySelector(".Happy-hours-bar").remove()
    }
}, 1000);