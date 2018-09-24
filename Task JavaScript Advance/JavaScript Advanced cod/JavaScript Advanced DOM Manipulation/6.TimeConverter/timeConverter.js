function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', function () {
        let daysValue = days.value;
        hours.value = daysValue * 24;
        minutes.value = daysValue * 24 * 60;
        seconds.value = daysValue * 24 * 60 * 60;
    });

    hoursBtn.addEventListener('click', function () {
        let hoursValue = hours.value;
        minutes.value = hoursValue * 60;
        seconds.value = hoursValue * 60 * 60;
        days.value = hoursValue / 24;
    });

    minutesBtn.addEventListener('click', function () {
        let minutesValue = minutes.value;
        seconds.value = minutesValue * 60;
        hours.value = minutesValue / 60;
        days.value = minutesValue / 60 / 24;
    });

    secondsBtn.addEventListener('click', function () {
        let secondsValue = seconds.value;
        minutes.value = secondsValue / 60;
        hours.value = secondsValue / 60 / 60;
        days.value = secondsValue / 60 / 60 /24;
    });
}
