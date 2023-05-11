setInterval(() => {
    date = new Date();
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    msec = date.getMilliseconds();
    // console.log(hmsec)
    hrotation = 30*hr + min/2;
    mrotation = 6*min + sec/10;
    srotation = 6*sec + (6*msec/1000);

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1);

