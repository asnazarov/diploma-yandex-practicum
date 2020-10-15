function startTime() {
    var time = new Date(),
        hr = time.getHours(),
        min = time.getMinutes(),
        sc = time.getSeconds(),
        clock = document.querySelector('.clock');

    hr = checkTime(hr);
    min = checkTime(min);
    sc = checkTime(sc);

    clock.innerHTML = hr + ':' + min + ':' + sc;
};
setInterval(startTime, 1000);
startTime();

function checkTime(param) {
    if (param < 10) {
        param = "0" + param;
    }
    return param;
};