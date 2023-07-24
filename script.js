function updatedTime(){
    let time = document.querySelector('.time');

    var realTime = new Date();
    var hours = correctedTime(realTime.getHours()) + ':' + correctedTime(realTime.getMinutes());
    time.textContent = hours;
}

function correctedTime(num){
    if(num < 10){
        num = '0' + num;
    }
    return num;
}

updatedTime();
setInterval(updatedTime, 1000);

