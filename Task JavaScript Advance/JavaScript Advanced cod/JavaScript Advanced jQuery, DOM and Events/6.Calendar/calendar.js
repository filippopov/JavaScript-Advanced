function calendar([day, month, year]) {
    let date = new Date(year, month - 1, day);
    function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }

    let maxDays = daysInMonth(month, year);

    let months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    };

    $('<table>')
        .append($(`<caption>${months[date.getMonth()]} ${date.getFullYear()}</caption>`))
        .append($('<tbody>')
            .append($('<tr>')
                .append($('<th>Mon</th>'))
                .append($('<th>Tue</th>'))
                .append($('<th>Wed</th>'))
                .append($('<th>Thu</th>'))
                .append($('<th>Fri</th>'))
                .append($('<th>Sat</th>'))
                .append($('<th>Sun</th>'))
            )
        )
        .appendTo($('#content'));

    var daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let tr = $('<tr>').append($('<td>')).append($('<td>')).append($('<td>')).append($('<td>')).append($('<td>')).append($('<td>')).append($('<td>'));
    for (let i = 1; i <= maxDays; i++) {
        let tempDay = new Date(year, month - 1, i, 10).getDay();

        let dayName = daysOfWeek[Number(tempDay)];
        if (dayName === 'Monday') {
            $('tbody').append(tr);
            if (i !== 1) {
                tr = $('<tr>').append($('<td>')).append($('<td>')).append($('<td>')).append($('<td>')).append($('<td>')).append($('<td>')).append($('<td>'));
            }
        }

        if (i === maxDays) {
            $('tbody').append(tr);
        }



        switch (dayName) {
            case 'Friday':
                tr.find('td:eq(4)').text(i);
                if (i === date.getDate()) {
                    tr.find('td:eq(4)').addClass('today');
                }

                break;
            case 'Saturday':
                tr.find('td:eq(5)').text(i);
                if (i === date.getDate()) {
                    tr.find('td:eq(5)').addClass('today');
                }

                break;
            case 'Sunday':
                tr.find('td:eq(6)').text(i);
                if (i === date.getDate()) {
                    tr.find('td:eq(6)').addClass('today');
                }

                break;
            case 'Monday':
                tr.find('td:eq(0)').text(i);
                if (i === date.getDate()) {
                    tr.find('td:eq(0)').addClass('today');
                }

                break;
            case 'Tuesday':
                tr.find('td:eq(1)').text(i);
                if (i === date.getDate()) {
                    tr.find('td:eq(1)').addClass('today');
                }

                break;
            case 'Wednesday':
                tr.find('td:eq(2)').text(i);
                if (i === date.getDate()) {
                    tr.find('td:eq(2)').addClass('today');
                }

                break;
            case 'Thursday':
                tr.find('td:eq(3)').text(i);
                if (i === date.getDate()) {
                    tr.find('td:eq(3)').addClass('today');
                }

                break;
        }
    }
}