document.addEventListener('DOMContentLoaded', function () {
    var timerDuration = 86400; // 24 hours in seconds
    var countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        var hours = parseInt(timerDuration / 3600, 10);
        var minutes = parseInt((timerDuration % 3600) / 60, 10);
        var seconds = parseInt(timerDuration % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownElement.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timerDuration < 0) {
            countdownElement.textContent = '00:00:00';
            clearInterval(timer);
        }
    }

    var timer = setInterval(updateCountdown, 1000);
});
