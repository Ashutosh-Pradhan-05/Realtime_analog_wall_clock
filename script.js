var hour_pin = document.getElementById('HH');
var min_pin = document.getElementById('MM');
var sec_pin = document.getElementById('SS');

function displayTime() {

    var date = new Date();
    var Hour = date.getHours();
    var Minute = date.getMinutes();
    var Second = date.getSeconds();

    var HourRotation = 30 * Hour + Minute / 2;
    var MinuteRotation = 6 * Minute;
    var SecondRotation = 6 * Second;

    hour_pin.style.transform = `rotate(${HourRotation}deg)`;
    min_pin.style.transform = `rotate(${MinuteRotation}deg)`;
    sec_pin.style.transform = `rotate(${SecondRotation}deg)`;
}
setInterval(displayTime, 1000);