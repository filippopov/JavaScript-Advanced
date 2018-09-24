function timer() {
    let time = 0;
    let timer = null;

    $('#start-timer').on('click', function () {
        if (timer === null) {
            timer = setInterval(step, 1000);
        }

        function step() {
            time++;
            let seconds = time % 60;
            let minutes = time / 60 % 60;
            minutes = Math.trunc(minutes);
            let hours = time / 3600 % 3600;
            hours = Math.trunc(hours);

            seconds = '0' + seconds;
            seconds = seconds.slice(-2);

            minutes = '0' + minutes;
            minutes = minutes.slice(-2);

            hours = '0' + hours;
            hours = hours.slice(-2);

            $('#seconds').text(seconds);
            $('#minutes').text(minutes);
            $('#hours').text(hours);
        }

    });

    $('#stop-timer').on('click', function () {
        clearInterval(timer);
        timer = null;
    })
}
